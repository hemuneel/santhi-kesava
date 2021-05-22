import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import reactDom from 'react-dom';

const Header = () => (
    <div className = 'header'>
        <Link className= 'logo-container' to="/" >
            <Logo className = 'logo'/>
        </Link>
        <div className = 'options'>
            <Link className = 'option' to = '/shops'>
                SHOP
            </Link>
            <Link className = 'option' to = '/shops'>
                CONTACT
            </Link>
        </div>
    </div>
);


export default Header;