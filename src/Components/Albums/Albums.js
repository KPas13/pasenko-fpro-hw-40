import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import './albums-list.css';

export default function Albums() {
    const { userID } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
            .then(response => response.json())
            .then(albumData => setAlbums(albumData));
    }, [userID]);


    return (
        <div className='main-container'>
            <h2 className='title'>Albums</h2>
            <ul className='album-list'>
                {albums.map(album => (
                    <li className='album-item' key={album.id}>
                        {album.title} {' '}
                        <Link className='link-album' to={`/photos/${album.id}`}>Photo in album</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
