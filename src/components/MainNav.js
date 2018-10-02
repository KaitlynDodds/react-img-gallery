import React from 'react';

import { NavLink } from 'react-router-dom';

const MainNav = props => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to={`/cats`}>Cats</NavLink>
                </li>
                <li>
                    <NavLink to={`/crayons`}>Crayons</NavLink>
                </li>
                <li>
                    <NavLink to={`/starwars`}>Star Wars</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;