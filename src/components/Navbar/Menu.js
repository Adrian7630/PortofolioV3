import React, { useState } from 'react';
import MenuItems from './MenuItems';
import '../../Styles/Menu.css';
import { Link } from 'react-router-dom';
 
const Menu = () => {

    const [click, setClick] = useState( false );

    const [color, setColor] = useState('Transparent');

    const handleClick = () => 
    {
        setClick(!click);
        setColor((!click) ? 'white' : 'transparent');
    }

    const ChangeColorDesktop = () =>
    {
        setColor('Transparent');
        setClick(false);
    }
    
    const ChangeColorMobile = () =>
    {
        setColor('Transparent');
        setClick(!click);
    }

    const MainColorDesktop = () =>
    {
        setColor('Transparent');
        setClick(false);
    }

    const MainColorMobile = () =>
    {
        setColor('Transparent');
        setClick(!click);
    }

    
    return (
        <nav className = "NavbarItems" style = {{ background: `${ color }`}}>

            <div className = "Menu-Icon" onClick = { handleClick }>
                <i className = { ( click ) ? 'fas fa-bars' : 'fas fa-bars'}></i>
            </div>

            <ul className = "NavbarMenu " >

                <li> 
                    <Link to = '/' onClick = { MainColorDesktop } className = 'nav-link'>   
                        HOME
                    </Link>
                </li>

                { MenuItems.map( (item, index) => (

                    <li key = { index }> 
                        <Link to = { item.url } onClick = { ChangeColorDesktop } className = { item.classN } >   
                            { item.title }
                        </Link>
                    </li>

                ))}
            </ul>

            <ul className = { ( click ) ? "NavbarMenu-Mobile" : "Empty-Box"}>

                <li> 
                    <Link to = '/' onClick = { MainColorMobile } className = 'nav-link'>   
                        HOME
                    </Link>
                </li>

                { MenuItems.map( (item, index) => (
                    
                    <li key = { index }> 
                        <Link to = { item.url } onClick = { ChangeColorMobile } className = { item.classN }>   
                            { item.title }
                        </Link>
                    </li>

                ))}
            </ul>
        </nav>
    )
}

export default Menu;