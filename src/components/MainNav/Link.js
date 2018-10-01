import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = props => {
    return (
        <li>
            <NavLink to={`/${props.topic}`} >{props.topic}</NavLink>
        </li>
    );
}

export default Link;