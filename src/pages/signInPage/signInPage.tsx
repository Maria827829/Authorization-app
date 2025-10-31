import ButtonBack from 'components/controls/ButtonBack/ButtonBack';
import style from './signInPage.module.scss';
import TitleForPage from 'components/controls/TitleForPage/TitleForPage';
import Typography from 'components/controls/Typography/Typography';
import Input from 'components/controls/Input/Input';
import PasswordInput from 'components/controls/PasswordInput/PasswordInput';
import Button from 'components/controls/Button/Button';

function SignInPage() {

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
                        className={style.emailInput}
                    />
                    <PasswordInput
                        label='Password'
                        name='Password'
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

export default SignInPage;