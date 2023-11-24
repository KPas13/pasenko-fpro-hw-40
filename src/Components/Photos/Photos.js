import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './photos-list.css';

// const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

export default function Photos() {
    const { albumID } = useParams();
    const [photos, setPhoto] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`)
            .then(response => response.json())
            .then(photoData => setPhoto(photoData));
    }, [albumID]);

    return (
        <div className='main'>
            <h1 className='title'>Photos</h1>
            <ul className='photos-list'>
                {photos.map(photo => (
                    <li className='photos-item' key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))};
            </ul>
        </div>
    );
}
