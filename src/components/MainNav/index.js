import React from 'react';

// components
import NavLink from './NavLink';

const MainNav = props => {
    return (
        <nav className="main-nav">
            <ul>
                <NavLink topic="cats" />
                <NavLink topic="dogs" />
                <NavLink topic="computers" />
            </ul>
        </nav>
    );
}

export default MainNav;