import Link from 'next/link';
import classes from './Header.module.css';


const Header = () => (
    <div className={classes.header}>
        <div className={`container`}>
            <div className={'row'}>
                <div className={`col-4`}>LemonGrassCloud</div>
            </div>
            <div className={'row'}>
                <div className={`col-8`}>
                    <ul>
                        <li>
                            <Link href="/account/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/account/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
export default Header