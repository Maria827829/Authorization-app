import { useNavigate } from 'react-router-dom';
import style from './ButtonBack.module.scss';
import Arrow from 'assets/images/Arrow.svg';

function ButtonBack() {
    const navigate = useNavigate();

	return (
        <div
            className={style.buttonBack}
            onClick={(): void => {navigate('/')}}
        >
            <img src={Arrow} />
            <span className={style.text}>Back</span>
        </div>
	)
}

export default ButtonBack;