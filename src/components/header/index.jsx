import React from 'react';
import logo from '../../assets/logo.png';
import './index.scss';

export const Header = () => {
    return <div className="header">
        <div className="containerLogo">
            <img src={logo} height="70px" />
        </div>
    </div>
}