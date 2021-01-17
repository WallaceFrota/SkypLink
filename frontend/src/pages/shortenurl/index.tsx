// DEVELOPED BY - WALLACE FROTA
// FROTADEV - SOFTWARE HOUSE

import React, { FormEvent, useRef, useState } from 'react';
import {FiLink, FiCopy, FiX, FiClipboard} from 'react-icons/fi'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../styles/pages/shortenurl.css';

import logoShorten from '../../images/skyplink.png'
import api from '../../services/api';

function ShortenUrl() {
    const urlCopy = useRef<HTMLInputElement>(null);
    const [visible, setVisible] = useState(false);
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [copied, setCopied] = useState(false);

    // função para encurtar link
    async function handleShortenUrl(event: FormEvent) {
        event.preventDefault();

        if(!url) {
            return alert("Preencha o campo!");
        }
        try {
            await api.post('/links', {
                url: url
            }).then(response => {
                const {code} = response.data;
                setShortenedUrl(code);
                setUrl('')
                setVisible(true)
            })
        } catch (error) {
            return alert("Erro ao encurtar url")
        }
    }
    // função que copia link encurtado
    const handleCopyToClipboard = () => {
        if(urlCopy && urlCopy.current) {
            urlCopy.current.select();
            document.execCommand("copy");
            setCopied(true)
        }
    }

    // close modal
    function handleCloseModal() {
        setVisible(!visible)
        setCopied(false)
    }

    return (
        <div className="page-container">
            <Header />
                    <div id="shorten-form">
                            <form onSubmit={handleShortenUrl}>
                                <div className="image">
                                    <img src={logoShorten} alt="Shorten"/>
                                </div>
                                
                                <input
                                    placeholder="Your url here"
                                    value={url}
                                    onChange={event => setUrl(event.target.value)}
                                />
                                
                                <button type="submit">
                                    <span>Shorten</span> 
                                    <FiLink color="#fff" size={26} />
                                </button>
                            </form>
                    </div>
                    {visible && (
                        <div className="modal">
                            <div className="close-modal">
                                <p>Acompanhe as estatísticas do link em https://skyplink.co/{shortenedUrl}/stats</p>
                                <button type="button" onClick={handleCloseModal}>
                                    <FiX color="#fff" size={26}/>
                                </button>
                            </div>
                                <input
                                    defaultValue={`http://localhost:3000/${shortenedUrl}`}
                                    ref={urlCopy}
                                />

                                <button type="button" onClick={handleCopyToClipboard}
                                    className={copied ? "copied" : "btn-copy"}
                                >
                                    {copied ?
                                        <>
                                        <span>Copiado!</span>
                                        </>
                                        :
                                        <>
                                        <span>Copiar</span>
                                        </>
                                    }
                                    {copied ?
                                        <>
                                            <FiClipboard color="#fff" size={26} />
                                        </>
                                        :
                                        <>
                                            <FiCopy color="#fff" size={26} />
                                        </>
                                    }
                                </button>
                        </div>
                    )}
                <Footer />
        </div>
    )
}

export default ShortenUrl;