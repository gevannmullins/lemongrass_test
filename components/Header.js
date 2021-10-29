import Link from 'next/link';
import classes from './Header.module.css';
import { useState, useEffect } from 'react';

import { NavLink } from '.';
import { userService } from 'services';

function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return (
        <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
            <div className="navbar-brand">
                <NavLink href="/">LemonGrassCloud</NavLink>
            </div>
            <div className="navbar-nav">
                <NavLink href="/login" exact className="nav-item nav-link">Login</NavLink>
                <NavLink href="/register" className="nav-item nav-link">Register</NavLink>
            </div>
        </nav>
    );

    return (
        <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
                <NavLink href="/users" className="nav-item nav-link">Users</NavLink>
                <a onClick={logout} className="nav-item nav-link">Logout</a>
            </div>
        </nav>
    );



}

export default Header