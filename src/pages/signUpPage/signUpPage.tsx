import ButtonBack from 'components/controls/ButtonBack/ButtonBack';
import style from './signUpPage.module.scss';
import TitleForPage from 'components/controls/TitleForPage/TitleForPage';
import Typography from 'components/controls/Typography/Typography';
import Input from 'components/controls/Input/Input';
import PasswordInput from 'components/controls/PasswordInput/PasswordInput';
import Button from 'components/controls/Button/Button';
import Checkbox from 'components/controls/Checkbox/Checkbox';
import { useCallback, useEffect, useState } from 'react';
import Check from 'assets/images/Check.svg';
import Cross from 'assets/images/Cross.svg';
import { SignUpApi } from 'api/authApi';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const navigate = useNavigate();
    const [ isChecked, setIsChecked ] = useState<boolean>(false);
    const [ emailValue, setEmailValue ] = useState<string>('');
    const [ isErrorEmail, setIsErrorEmail ] = useState<boolean>(false);
    const [ isValidEmail, setIsValidEmail ] = useState<boolean>(false);
    const [ passwordValue, setPasswordValue ] = useState<string>('');
    const [ isErrorPassword, setIsErrorPassword ] = useState<boolean>(false);
    const [ isDisabled, setIsDisabled ] = useState<boolean>(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ backendError, setBackendError ] = useState<string>('');

    const handleChecked = useCallback((): void => {
		setIsChecked((isCheckedPrev) => { return !isCheckedPrev });
	}, []);

    const changeEmailValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = e.target.value;
        setEmailValue(newValue);
        if (newValue.length === 0) {
            setIsErrorEmail(false);
            setIsValidEmail(false);
        } else if (newValue.length < 5) {
            setIsErrorEmail(true);
            setIsValidEmail(false);
        } else {
            setIsErrorEmail(false);
            setIsValidEmail(true);
        }
    };

    const changePasswordValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = e.target.value;
        setPasswordValue(newValue);
        if (newValue.length === 0) {
            setIsErrorPassword(false);
        } else if (newValue.length < 3) {
            setIsErrorPassword(true);
        } else {
            setIsErrorPassword(false);
        }
    };

    const handleSignUp = (): void => {
        if (isDisabled) return;

        setBackendError('');
        setIsLoading(true);

        SignUpApi.signUp({
            email: emailValue,
            password: passwordValue,
        })
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                const message = error.response?.data?.message || 'Registration failed';
                setBackendError(message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        const isFormInvalid =
            !emailValue.trim() ||
            !passwordValue.trim() ||
            isErrorEmail ||
            isErrorPassword ||
            !isChecked;

        setIsDisabled(isFormInvalid);
    }, [ emailValue, passwordValue, isErrorEmail, isErrorPassword, isChecked ]);

	return (
		<div className={style.signUpPage}>
            <ButtonBack />
            <div className={style.content}>
                <div className={style.title}>
                    <TitleForPage title='Sign up' />
                    <Typography text='Please create a new account' />
                </div>
                <form className={style.form}>
                    <Input
                        label='Email'
                        name='Email'
                        value={emailValue}
                        onChange={changeEmailValue}
                        className={style.emailInput}
                        isError={isErrorEmail}
                        errorText='The field must contain at least 5 characters.'
                        src={isErrorEmail ? `${Cross}` : isValidEmail ? `${Check}` : ''}
                    />
                    <PasswordInput
                        label='Password'
                        name='Password'
                        value={passwordValue}
                        onChange={changePasswordValue}
                        isErrorPassword={isErrorPassword}
                        errorText='The field must contain at least 3 characters.'
                    />
                    <Checkbox
                        label='Agree the terms of use and privacy policy'
                        checked={isChecked}
                        onChange={(): void => { handleChecked() }}
                    />
                    <Button
                        text={isLoading ? 'Loading...' : 'Sign up'}
                        className={style.button}
                        isDisabled={isLoading ? true : isDisabled}
                        onClick={(): void => { handleSignUp() }}
                    />
                </form>
                {backendError && (
                    <Typography
                        text={backendError}
                        isError
                        className={style.errorText}
                    />
                )}
            </div>
        </div>
	)
}

export default SignUpPage;