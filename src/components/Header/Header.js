import React from 'react';

import Work from '../Work/Work';
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Work></Work>
            
        </div>
    );
};

export default Header;