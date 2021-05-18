import {useRouter} from 'next/router';
import styles from '../styles/Header.module.css';

export default function Header() {

    const router = useRouter();

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                    <h1>Next News</h1>
            </div>
            <div className={styles.nav}>
                <ul>
                    <li>
                        <a onClick={() => router.push('/')}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => router.push('/tech/1')}>Tech</a>
                    </li>
                    <li>
                        <a onClick={() => window.location.href='https://github.com/lumungep12/Nextjs-Blog'}>Source</a>
                    </li>
                </ul>
        </div>
        </div>
    )
}
