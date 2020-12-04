import React from 'react';
import {FiInstagram, FiLinkedin, FiGithub} from 'react-icons/fi';
import './styles.css';

export default function Footer() {
    return (
        <footer>
            <span>FrotaDev - Software House</span>
            
            <div className="icons">
                <a href="https://instagram.com/frota.dev" target="_blank">
                    <FiInstagram color="#fff" size={26}/>
                </a>
                <a href="https://www.linkedin.com/in/wallacefrota" target="_blank">
                    <FiLinkedin color="#fff" size={26}/>
                </a>
                <a href="https://github.com/WallaceFrota" target="_blank">
                    <FiGithub color="#fff" size={26}/>
                </a>
            </div>
        </footer>
    )
}