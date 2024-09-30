import React from 'react'
import { useParams } from 'react-router';
import RoomBookingModal from './RoomBookingModal';
// import { useParams } from 'react';

const RoomDetails = ({room}) =>
{
    // console.log('param/id:', props.match.params.id);
    const {id} = useParams()
    console.log('rood.id',id)


    
    return (
        <></>
    )
}

export default RoomDetails;
