import {useRouter} from 'next/router';
import { FaFacebookF, FaTwitter, FaEnvelopeOpenText, FaSearch, FaYoutube, FaBars } from "react-icons/fa";
import styles from '../styles/Header.module.css';

export default function Header() {

    const router = useRouter();

    return (
        <div className={styles.header}>
            <div className={styles.contact}>
                <div className={styles.socials}>
                    <i>
                        <FaFacebookF/>
                    </i>
                    <i>
                        <FaTwitter/>
                    </i>
                    <i>
                        <FaEnvelopeOpenText/>
                    </i>
                    <i>
                        <FaYoutube/>
                    </i>
                </div>
            </div>
            <div className={styles.logo}>
                    <h1>Next News</h1>
                <div className={styles.icons}>
                    <button>
                    <FaSearch/>
                    </button>
                    <button>
                    <FaBars/>
                    </button>
                </div>
            </div>
            <div className={styles.nav}>
                <ul>
                    <li>
                        <a onClick={() => router.push('/')}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => router.push('/featured')}>Featured</a>
                    </li>
                    <li>
                        <a onClick={() => router.push('/science/1')}>Science</a>
                    </li>
                    <li>
                        <a onClick={() => router.push('/tech/1')}>Tech</a>
                    </li>
                    <li>
                        <a onClick={() => router.push('/business/1')}>Business</a>
                    </li>
                    <li>
                        <a onClick={() => router.push('/sports/1')}>Sports</a>
                    </li>
                    <li>
                        <a onClick={() => window.location.href='https://github.com/lumungep12'}>Github</a>
                    </li>
                </ul>
        </div>
        </div>
    )
}
