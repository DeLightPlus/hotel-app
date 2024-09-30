import '../styles.css'
import React, { useState } from 'react';

const RoomForm = ({ onSubmit, room }) => 
{
  const [roomName, setRoomName] = useState(room ? room.room_name : '');
  const [roomDescription, setRoomDescription] = useState(room ? room.room_description : '');
  const [capacity, setCapacity] = useState(room ? room.capacity : '');
  const [price, setPrice] = useState(room ? room.price : '');
  const [avail_check_in, setAvailability_In] = useState(room ? room.avail_check_in : '');
  const [avail_check_out, setAvailability_Out] = useState(room ? room.avail_check_out : '');
  const [availNights, setAvailNights] = useState(room ? room.avail_night : 0);
  const [status, setStatus] = useState(room ? room.status : '');
  const [rating, setRating] = useState(room ? room.rating : '');
  const [image, setImageURL] = useState(room ? room.image : '');

  const calculateAvailableNights = () => 
  {
    const checkInDate = new Date(avail_check_in);
    const checkOutDate = new Date(avail_check_out);

    console.log(checkInDate , checkOutDate);
    
    if(checkInDate && checkOutDate)
    {
      const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);    
      
      const availableNights = Math.floor(differenceInDays);
      console.log(differenceInDays, 'days | nights', availNights) ;
  
      setAvailNights(availableNights);
    }    
    
  };

  const handleSubmit = (event) => 
  {
    event.preventDefault();
    onSubmit({
      room_name: roomName,
      room_description: roomDescription,
      capacity: parseInt(capacity),
      price: parseInt(price),
      avail_check_in,
      avail_check_out,
      avail_night: parseInt(availNights),
      status,
      rating,
      image,
    });

    setRoomName('');
    setRoomDescription(''); 
    setCapacity('');
    setPrice('');
    setAvailability_In('');
    setAvailability_Out('');
    setAvailNights('');
    setStatus('');
    setRating('');
    setImageURL('');
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
          <h4>Add Room</h4>
        
          <label>
            Room Name:
            <input type="text" value={roomName} onChange={(event) => setRoomName(event.target.value)} />
          </label>
          
          <label>
            Room Description:
            <input type="text" value={roomDescription} onChange={(event) => setRoomDescription(event.target.value)} />
          </label>
         
          <div className='input-group'>
            <label>
              Capacity:
              <input type="number" id='capacity' value={capacity}
                onChange={(event) => setCapacity(event.target.value)} />
            </label>
            
            <label>
              Price:
              <input type="number" id='price' value={price} 
                onChange={(event) => setPrice(event.target.value)} />
            </label>
          </div>
         
          <label>
            Availability:
            <input type="date" value={avail_check_in} 
              onChange={(event) => {
                setAvailability_In(event.target.value);
                calculateAvailableNights();
              }} />|
            <input type="date" value={avail_check_out} 
              onChange={(event) => {
                setAvailability_Out(event.target.value);
                calculateAvailableNights();
              }} />
          </label>

          <label>
            Available Nights:
            <input type="number" id='night_avail' value={availNights} 
              readOnly={true} />
          </label>
          
          <label>
            Available:
            <input type="checkbox" value={status} 
              onChange={(event) => setStatus(event.target.checked)} />
          </label>
          
          <div className='input-group'>
          <label>
            Rating:
            <input type="text" value={rating} id='ratings'
              onChange={(event) => setRating(event.target.value)} />
          </label>
          
          <label>
            Image:
            <input type="text" onChange={(event) => setImageURL(event.target.value)} />
          </label>
          </div>
          
          <button type="submit">Save</button>
        
        
      </form>
    </div>
  );
};

export default RoomForm;