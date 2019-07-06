import React from 'react';
import { Button } from 'reactstrap';

// import './Header.css';

function Header(props) {
    return(
        <header>
            <Button onClick={props.onToggleHandler} type ="button" color ="primary">
                burger
            </Button>
        </header>
    )
}
export default Header;