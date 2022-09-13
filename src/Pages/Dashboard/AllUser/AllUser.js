import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading/Loading';
import UserSingleRow from './UserSingleRow';

const AllUser = () => {
    const { data: usersList, isLoading } = useQuery('users', async () => await axios.get(`https://frozen-fortress-52042.herokuapp.com/user`));
    const users = usersList?.data;

    console.log(users);

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.lenght ? users.map(user => <UserSingleRow user={user} key={user._id}/>) : <div><h2 className="text-2xl text-red-400">No data found</h2></div>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;