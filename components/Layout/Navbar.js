import React, { useState } from 'react'
import NavStlye from '../../styles/Navbar.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <nav className={NavStlye.navbar}>
                <div>
                    <img src='/Logo.png' />
                </div>
                <div class="toggler">
                    <GiHamburgerMenu className={NavStlye.Toggler} onClick={showSidebar}/>
                </div>
                <ul className={sidebar ? `${NavStlye.navitems} active` : NavStlye.navitems}>
                    <li><a href='#'>industries</a></li>
                    <li><a href='#'>hire</a></li>
                    <li><a href='#'>Find Work</a></li>
                    <li><a href='#'>Help</a></li>
                    <li className={NavStlye.getStarted}><a href='#'>Get Started</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar