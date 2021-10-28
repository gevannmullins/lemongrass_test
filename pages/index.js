import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

function App() {
    testAddUser();
    return (
        <div className="p-4">
            <div className="container">
                <h1>NEXTJS</h1>
                <p>Your first app</p>
            </div>
        </div>
    );
}

function testAddUser(){
    let db = new JsonDB(new Config("myDataBase", true, false, '/'));
    let addUser = [{
        firstName: "test",
        lastname: 'tester',
        email: 'test@tester.com',
        username: 'testtester',
        password: '12345678'
    }];
    db.push(addUser);
    // db.save(true);

}

export default App;