const bcrypt = require('bcryptjs');

import { apiHandler } from 'helpers';
import { omit } from 'helpers';
import { usersRepo } from 'helpers/db';

export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

function getById(req, res) {
    const user = usersRepo.getById(req.query.id);

    if (!user) throw 'User Not Found';

    return res.status(200).json(omit(user, 'hash'));
}

function update(req, res) {
    const user = usersRepo.getById(req.query.id);

    if (!user) throw 'User Not Found';

    // split out password from user details 
    const { password, ...params } = req.body;

    // validate
    if (user.username !== params.username && usersRepo.find(x => x.username === params.username))
        throw `User with the username "${params.username}" already exists`;
    if (user.emailaddress !== params.emailaddress && usersRepo.find(x => x.emailaddress === params.emailaddress))
        throw `User with the email "${params.emailaddress}" already exists`;

    // only update hashed password if entered
    if (password) {
        user.hash = bcrypt.hashSync(password, 10);
    }

    usersRepo.update(req.query.id, params);
    return res.status(200).json({});
}

function _delete(req, res) {
    usersRepo.delete(req.query.id);
    return res.status(200).json({});
}
