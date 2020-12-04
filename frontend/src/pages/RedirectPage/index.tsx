import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import imageNotFound from '../../images/stats.gif'
import '../../styles/pages/redirectpage.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface CodeParams {
    link: string
}

export default function RedirectPage() {
    
    const { link } = useParams<CodeParams>();

    useEffect(() => {
        async function getInfo() {

            if(link) {
                try {
                    await api.get(`links/${link}`).then(response => {
                        const {url} = response.data[0];

                        setTimeout(() => {
                            // call function redirect page
                            redirectPage(url);
                        }, 2000)
                    });
                } catch (error) {
                    return alert('Ooops! não foi possível redirecionar...')
                }
            }
            
        }
        getInfo();

    },[link]);

    function redirectPage(url: string) {
        window.location.replace(url)
    }

    return (
        <div className="page-container">
            <Header/>
                <div className="container-content">
                    <img src={imageNotFound} alt="Não encontrado"/>
                    <p>Redirecionando...</p>
                </div>
            <Footer/>
        </div>
    )
}