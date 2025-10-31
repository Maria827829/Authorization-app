import ButtonBack from 'components/controls/ButtonBack/ButtonBack';
import style from './signUpPage.module.scss';
import TitleForPage from 'components/controls/TitleForPage/TitleForPage';
import Typography from 'components/controls/Typography/Typography';
import Input from 'components/controls/Input/Input';
import PasswordInput from 'components/controls/PasswordInput/PasswordInput';
import Button from 'components/controls/Button/Button';
import Checkbox from 'components/controls/Checkbox/Checkbox';
import { useCallback, useState } from 'react';

function SignUpPage() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = useCallback((): void => {
		setIsChecked((isCheckedPrev) => { return !isCheckedPrev });
	}, []);


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
                        className={style.emailInput}
                    />
                    <PasswordInput
                        label='Password'
                        name='Password'
                    />
                    <Checkbox
                        label='Agree the terms of use and privacy policy'
                        checked={isChecked}
                        onChange={(): void => { handleChecked() }}
                    />
                    <Button
                        text='Sign in'
                        className={style.button}
                    />
                </form>
            </div>
        </div>
	)
}

export default SignUpPage;