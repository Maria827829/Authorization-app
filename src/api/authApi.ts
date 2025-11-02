import api from './api';
import type { AuthDto, SignInResponseDto, SignUpResponseDto } from 'dto/auth.dto';

export const SignUpApi = {
    signUp: async (data: AuthDto): Promise<SignUpResponseDto> => {
        const res = await api.post<SignUpResponseDto>('/register', data);
        return res.data;
    },
};

export const SignInApi = {
    signIn: async (data: AuthDto): Promise<SignInResponseDto> => {
        const res = await api.post<SignInResponseDto>('/login', data);
        sessionStorage.setItem('token', res.data.token);
        return res.data;
    },
};

