import type { UserDto, UsersListDto } from 'dto/users.dto';
import style from './UsersList.module.scss';

interface Props {
    users: UsersListDto;
};

interface MappedUser {
    index: number;
    id: number;
    email: string;
}

function UsersList({ users }: Props) {
    const mappedUsers: MappedUser[] = users.map((user: UserDto, index: number): MappedUser => ({
        index: index + 1,
        id: user.id,
        email: user.email,
    }));

	return (
        <div className={style.usersList}>
            {mappedUsers.map((user: MappedUser) => (
                <div
                    key={user.id}
                    className={style.userItem}
                >
                    <span className={style.item}>{user.index}</span>
                    <span className={style.item}>{`id${user.id}`}</span>
                    <span className={style.itemEmail}>{user.email}</span>
                </div>
            ))}
        </div>
	)
}

export default UsersList;