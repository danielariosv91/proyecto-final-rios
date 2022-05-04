import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export default function Detalle() {
    const { id } = useParams();

    useEffect(() => {
        console.log(id)
    }, [id]);


    return (
        <div>{id}</div>
    )
}