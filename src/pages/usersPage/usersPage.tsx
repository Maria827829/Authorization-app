import TitleForPage from 'components/controls/TitleForPage/TitleForPage';
import style from './usersPage.module.scss';
import UsersList from 'components/common/UsersList/UsersList';
import { useEffect, useState } from 'react';
import type { UserDto } from 'dto/users.dto';
import { UsersApi } from 'api/usersApi';
import Typography from 'components/controls/Typography/Typography';

function UsersPage() {
    const [users, setUsers] = useState<UserDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        UsersApi.getUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

	return (
		<div className={style.usersPage}>
            <TitleForPage title='Users' />
            {isLoading ?
                <Typography text='Loading...' />
            :
                <UsersList users={users} />
            }
        </div>
	)
}

export default UsersPage;