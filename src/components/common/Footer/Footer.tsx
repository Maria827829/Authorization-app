import style from './Footer.module.scss';

function Footer() {

	return (
        <footer className={style.footer}>
            <span className={style.version}>v0.0.0</span>
        </footer>
	)
}

export default Footer;