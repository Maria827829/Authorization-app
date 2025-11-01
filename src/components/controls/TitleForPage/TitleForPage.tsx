import style from './TitleForPage.module.scss';

interface Props {
    title: string;
};

function TitleForPage({ title }: Props) {

	return (
        <h1 className={style.titleForPage}>{title}</h1>
	)
}

export default TitleForPage;