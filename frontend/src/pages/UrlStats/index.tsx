import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import api from '../../services/api';

import '../../styles/pages/urlstats.css';

interface LinkCode {
    link: string;
}

interface LinkData {
    id: number;
    code: string;
    hits?: number;
    url: string;
}

export default function UrlStats() {
    const {link} = useParams<LinkCode>();
    const [data, setData] = useState<LinkData>();

    useEffect(()  => {
        async function getInfo() {
            if(link) {
                try {
                    api.get(`/links/${link}/stats`).then(response => {
                        setData(response.data[0])
                    })
                } catch (error) {
                    return alert("Erro ao obter estatística do link, verique-o.")
                }
            }
        }
        getInfo();
    },[link])

    return (
        <div className="page-container">
            <Header />
                <div className="container-content-stats">
                        <div className="info-url">
                            <p>Dados</p>
                            <span>Short Link: {`http://localhost:3000/${data?.code}`}</span>
                            <span>Redirect To: {data?.url}</span>
                        </div>
                        <div className="box-content">
                            <p>Total de Visitas</p>
                            <h2>{data?.hits}</h2>
                        </div>
                </div>
            <Footer />
        </div>
    )
}