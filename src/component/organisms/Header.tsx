import React from 'react';
import './Header.scss';
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function Header() {
    return (
        <div className="nav-container">
            <div className="nav-container__wrapper">
                <div className="nav-container__brand">test</div>
                <div className="nav-container__search__bar"><Input placeholder={"Type to search..."}/></div>
                <div className="nav-container__cart__icon"><Button onClick={() => {}}>cart</Button></div>
            </div>
        </div>
    );
}

export default Header;
