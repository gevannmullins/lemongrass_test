import { userService } from 'services';
import { Link } from 'components';

function MyApp() {
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
                <p>Successfully logged in. </p>
                <p><Link href="/users">Manage Users</Link></p>
            </div>
        </div>
    );
}

export default MyApp;
