import style from './Typography.module.scss';

interface Props {
    text: string;
    isError?: boolean;
    className?: string;
};

function Typography({
    text,
    isError = false,
    className = ''
}: Props) {

	return (
        <p className={`
            ${style.typography}
            ${isError && style.error}
            ${className}
        `}>
            {text}
        </p>
	)
}

export default Typography;