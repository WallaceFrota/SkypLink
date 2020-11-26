import React from 'react';

import Logo from '../../images/logo.svg'
import './styles.css';

export default function Header() {
    return (
        <header className="page-header">
                <img src={Logo} alt="Logo"/>
            
                <h2>
                    Shorten your url and share
                </h2>
        </header>
    )
}