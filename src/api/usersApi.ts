import api from './api';
import type { UsersListDto } from 'dto/users.dto';

const token = sessionStorage.getItem('token');

export const UsersApi = {
    getUsers: async (): Promise<UsersListDto> => {
        const res = await api.get<UsersListDto>('/users', {
            headers: {
            'x-access-token': token || '',
            },
        });

        return res.data;
    },
};