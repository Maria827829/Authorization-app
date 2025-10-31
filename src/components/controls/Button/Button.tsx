import style from './Button.module.scss';

interface Props {
    text: string;
    className?: string;
    isDisabled?: boolean;
};

function Button({text, className, isDisabled}: Props) {

	return (
        <button className={`
        ${style.button}
        ${isDisabled && style.disabled}
        ${className}
        `}>
            {text}
        </button>
	)
}

export default Button;