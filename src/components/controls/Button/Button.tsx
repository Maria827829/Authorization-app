import style from './Button.module.scss';

interface Props {
    text: string;
    onClick?: () => void;
    className?: string;
    isDisabled?: boolean;
};

function Button({
    text,
    onClick,
    className = '',
    isDisabled = false
}: Props) {

	return (
        <button
            className={`
                ${style.button}
                ${isDisabled && style.disabled}
                ${className}
            `}
            type='button'
            onClick={onClick}
        >
            {text}
        </button>
	)
}

export default Button;