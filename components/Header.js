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
    <div className={classes.header}>
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-4`}>LemonGrassCloud</div>
            </div>
            <div className={`row`}>
                <div className={`col-8 text-right`}>
                    <ul>
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
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