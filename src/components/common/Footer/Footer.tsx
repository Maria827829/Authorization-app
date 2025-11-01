import { useEffect, useState } from 'react';
import style from './Footer.module.scss';
import { VersionApi } from 'api/versionApi';

function Footer() {
    const [version, setVersion] = useState<string>('');

    useEffect(() => {
        VersionApi.getVersion()
            .then(versionData => setVersion(versionData.version))
            .catch(error => console.error('Failed to fetch version:', error));
    }, []);

	return (
        <footer className={style.footer}>
            <span className={style.version}>v1.0.0</span>
        </footer>
	)
}

export default Footer;