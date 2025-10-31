import TitleForPage from 'components/controls/TitleForPage/TitleForPage';
import style from './welcomePage.module.scss';
import Typography from 'components/controls/Typography/Typography';
import Button from 'components/controls/Button/Button';

function WelcomePage() {

	return (
		<div className={style.welcomePage}>
            <div className={style.imgX}></div>
            <div className={style.imgR}></div>
            <div className={style.content}>
                <div className={style.title}>
                    <TitleForPage title='Welcome' />
                    <Typography text='Lets get started' />
                </div>
                <div className={style.loginContainer}>
                    <Typography text='Existing  customer / Get started ' />
                    <Button
                        className={style.button}
                        text='Sign in'
                    />
                    <div className={style.linkNewAccount}>
                        <Typography text='New customer?' />
                        <span className={style.link}>Create new account</span>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default WelcomePage;