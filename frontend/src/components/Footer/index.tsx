import React from 'react';
import {FiInstagram, FiLinkedin, FiGithub} from 'react-icons/fi';
import './styles.css';

export default function Footer() {
    return (
        <footer>
            <span>FrotaDev - Software House</span>
            
            <div className="icons">
                <FiInstagram color="#fff" size={26}/>
                <FiLinkedin color="#fff" size={26}/>
                <FiGithub color="#fff" size={26}/>
            </div>
        </footer>
    )
}