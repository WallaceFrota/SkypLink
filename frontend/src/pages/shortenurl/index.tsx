import React, { FormEvent, useState } from 'react';
import {FiLink, FiCopy, FiX} from 'react-icons/fi'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../styles/pages/shortenurl.css';

import logoShorten from '../../images/skyplink.png'
import api from '../../services/api';

export default function ShortenUrl() {
    const [visible, setVisible] = useState(false);
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    async function handleShortenUrl(event: FormEvent) {
        event.preventDefault();

        await api.post('/links', {
            url: url
        }).then(response => {
            const {code} = response.data;
            setShortenedUrl(code);
            setUrl('')
            setVisible(true)
        })
    }

    // close modal
    function handleCloseModal() {
        setVisible(!visible)
    }

    return (
        <div className="container">
            <Header />
                    <div id="shorten">
                            <form onSubmit={handleShortenUrl}>
                                <div className="image">
                                    <img src={logoShorten} alt="Shorten"/>
                                </div>
                                
                                <input
                                    name="url"
                                    placeholder="Your url here"
                                    value={url}
                                    onChange={event => setUrl(event.target.value)}
                                />
                                
                                <button type="submit">
                                    <span>Encurtar</span> 
                                    <FiLink color="#fff" size={26} />
                                </button>
                            </form>
                    </div>

                    {visible && (
                        <div className="modal" >
                            <div className="close-modal">
                                <a href="#" onClick={handleCloseModal}>
                                    <FiX color="#000" size={32}/>
                                </a>
                            </div>

                            <div className="modal-content">
                                <input id="url" disabled value={`http://localhost:3333/links/${shortenedUrl}`}/>

                                <a href="#" >
                                    <span>Copiar</span> 
                                    <FiCopy color="#fff" size={26} />
                                </a>
                            </div>
                        </div>
                    )}
            <Footer />
        </div>
    )
}