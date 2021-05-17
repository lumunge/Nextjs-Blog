import {useRouter} from 'next/router';
import Header from '../../components/Header';
import styles from '../../styles/Science.module.css';

export default function science({articles}){

    console.log(articles);

    const router = useRouter()

    return(
        <>
        <Header/>
        <div className={styles.science}>
            <div className={styles.main}>
            <div className={styles.landing}>
                <h1>Here</h1>
                {articles.map((article, index) => {
                    <div key={index} className={styles.article}>
                        <h1>{article.title}</h1>
                    </div>
                })}
            </div>
            </div>
            <div className={styles.sidebar}>
                sidepeice here
            </div>
        </div>
        </>
    )
}

export const getServerSideProps = async pageContext => {

    const res = await fetch(
        `https://newsapi.org/v2/top-headlines?category=science&pageSize=10`,
        {
            headers: {
                Authorization: `${process.env.NEWS_KEY}`
            },
        }
    );

    const data = await res.json()

    const {articles} = data;

    return{
        props: {
            articles
        }
    }
}