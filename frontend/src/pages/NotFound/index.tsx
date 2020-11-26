import React from 'react';

import imageNotFound from '../../images/stats.gif'
import './styles.css'
export default function NotFound() {
    return (
        <div id="not-found-container">
            <img src={imageNotFound} alt="Não encontrado"/>
            <h2>404 NOT FOUND ):</h2>
        </div>
    )
}