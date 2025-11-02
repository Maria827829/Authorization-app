export interface AuthDto {
    email: string;
    password: string;
}
export interface SignUpResponseDto {
    message: string;
}

export interface SignInResponseDto {
    token: string;
}