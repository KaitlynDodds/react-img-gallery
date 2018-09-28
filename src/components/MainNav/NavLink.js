import React from 'react';

const NavLink = props => {
    return (
        <li>
            <a href='#'>{props.topic}</a>
        </li>
    );
}

export default NavLink;