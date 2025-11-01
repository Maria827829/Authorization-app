import { useCallback, useState } from 'react';
import Input from 'components/controls/Input/Input';
import style from './PasswordInput.module.scss';
import NotVision from 'assets/images/NotVision.svg';
import Vision from 'assets/images/Vision.svg';

interface Props {
    label: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    isErrorPassword?: boolean;
    errorText?: string;
};

function PasswordInput({
    label,
    value,
    onChange,
    name,
    isErrorPassword = false,
    errorText = '',
}: Props) {
    const [ isOpenEye, setIsOpenEye ] = useState<boolean>(false);

    const handleOpenEye = useCallback((): void => {
		setIsOpenEye((isOpenPrev) => { return !isOpenPrev });
	}, []);

	return (
        <div className={style.passwordInput}>
            <Input
                label={label}
                name={name}
                option={isOpenEye ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                onClick={(): void => { handleOpenEye() }}
                isErrorPassword={isErrorPassword}
                errorText={errorText}
                src={isOpenEye ? `${Vision}` : `${NotVision}`}
            />
        </div>
	)
}

export default PasswordInput;