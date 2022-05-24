import React from 'react'
import { getFirestore, doc, setDoc } from "firebase/firestore";

export default function Firebase() {

    async function grabarDatos() {
        const database = getFirestore();
        const newIdKey = new Date().getTime().toString();

        const productData = {
            title: "Berserk",
            author: "Kentaro Miura",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/batman80anivol191-5a4d6411b2ef55dd1315908772450482-480-0.jpg",
            price: 250
        };

        await setDoc(doc(database, "items", newIdKey), productData);
    }

    return (
        <div>
            <button onClick={() => grabarDatos()}>Agregar data a Firebase</button>
        </div>
    )
}
