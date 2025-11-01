import ButtonBack from 'components/controls/ButtonBack/ButtonBack';
import style from './signInPage.module.scss';
import TitleForPage from 'components/controls/TitleForPage/TitleForPage';
import Typography from 'components/controls/Typography/Typography';
import Input from 'components/controls/Input/Input';
import PasswordInput from 'components/controls/PasswordInput/PasswordInput';
import Button from 'components/controls/Button/Button';
import { useEffect, useState } from 'react';
import Check from 'assets/images/Check.svg';
import Cross from 'assets/images/Cross.svg';

function SignInPage() {
    const [emailValue, setEmailValue] = useState<string>('');
    const [ isErrorEmail, setIsErrorEmail ] = useState<boolean>(false);
    const [ isValidEmail, setIsValidEmail ] = useState<boolean>(false);
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [ isErrorPassword, setIsErrorPassword ] = useState<boolean>(false);
    const [ isDisabled, setIsDisabled ] = useState<boolean>(false);

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

    useEffect(() => {
        const isFormInvalid =
            !emailValue.trim() ||
            !passwordValue.trim() ||
            isErrorEmail ||
            isErrorPassword;

        setIsDisabled(isFormInvalid);
    }, [ emailValue, passwordValue, isErrorEmail, isErrorPassword ]);

	return (
		<div className={style.signInPage}>
            <ButtonBack />
            <div className={style.content}>
                <div className={style.title}>
                    <TitleForPage title='Sign in' />
                    <Typography text='Please log in into your account' />
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
                    <Button
                        text='Sign in'
                        className={style.button}
                        isDisabled={isDisabled}
                    />
                </form>
            </div>
        </div>
	)
}

export default SignInPage;