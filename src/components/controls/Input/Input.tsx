import style from './Input.module.scss';

export type InputOption = 'text' | 'password';

interface Props {
    label: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    option?: string;
    src?: string;
    onClick?: () => void;
    className?: string;
    autocomplete?: string;
};

function Input({
    label,
    value,
    onChange,
    name,
    option = 'text',
    src = '',
    onClick = (): void => {},
    className = '',
    autocomplete = 'on'
}: Props) {

	return (
        <div className={`
            ${style.input}
            ${className}
        `}>
            <label
                className={style.label}
                htmlFor={name}
            >
                {label}
            </label>
            <div className={style.inputWrapper}>
                <input
                    className={style.inputMain}
                    value={value}
                    name={name}
                    onChange={onChange}
                    type={option}
                    autoComplete={autocomplete}
                />
                {src && (
                    <img
                        className={style.image}
                        src={src}
                        onClick={onClick}
                    />
                )}
            </div>
        </div>
	)
}

export default Input;