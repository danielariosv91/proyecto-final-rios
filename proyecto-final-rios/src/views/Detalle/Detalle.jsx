import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetailContainer from './../../components/ItemDetailContainer/ItemDetailContainer'
 

export default function Detalle() {
    const { id } = useParams();

    useEffect(() => {
        console.log(id)
    }, [id]);


    return (
        <ItemDetailContainer id={id}></ItemDetailContainer>       
    )
}