import React from 'react';

const UserSingleRow = ({user}) => {
    const {email} = user;
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
        </tr>
    );
};

export default UserSingleRow;