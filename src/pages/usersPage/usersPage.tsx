import TitleForPage from 'components/controls/TitleForPage/TitleForPage';
import style from './usersPage.module.scss';
import UsersList from 'components/common/UsersList/UsersList';

export const testUsers = [
    { id: 1, email: 'alice' },
    { id: 2, email: 'bob' },
    { id: 3, email: 'charlie' },
    { id: 4, email: 'david' },
    { id: 5, email: 'eve' },
    { id: 6, email: 'frank' },
    { id: 7, email: 'grace' },
    { id: 10, email: 'heidi' },
];

function UsersPage() {

	return (
		<div className={style.usersPage}>
            <TitleForPage title='Users' />
            <UsersList
                users={testUsers}
            />
        </div>
	)
}

export default UsersPage;