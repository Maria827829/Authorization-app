import style from './Typography.module.scss';

interface Props {
    text: string;
};

function Typography({text}: Props) {

	return (
        <p className={style.typography}>{text}</p>
	)
}

export default Typography;