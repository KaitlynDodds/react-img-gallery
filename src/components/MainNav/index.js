import React from 'react';

// components
import Link from './Link';

const MainNav = props => {
    return (
        <nav className="main-nav">
            <ul>
                <Link topic="cats" />
                <Link topic="crayons" />
                <Link topic="starwars" />
            </ul>
        </nav>
    );
}

export default MainNav;