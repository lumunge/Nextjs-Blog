import {useRouter} from 'next/router';
import { FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";
import Header from '../../components/Header';
import styles from '../../styles/Tech.module.css';

export default function tech({articles, pageNumber}){

    const cyberArticles = articles.articles;
    
    const router = useRouter();

    return (
        <div className={styles.tech}>
            <Header/>
            <div className={styles.title}>
                <p>Cyber Security</p>
            </div>
        <div className={styles.main}>
            {cyberArticles.map((item, index) => (
                <div key={index} className={styles.article}>
                    <div className={styles.itemImg}>
                        <img src={item.urlToImage} alt={item.title} />
                    </div>
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.description.length > 200 && item.description.substr(0, 200) + '.....'}</p>
                    </div>
                </div>
            ))}
            <div className={styles.paginator}>
                <div >
                   <span className={pageNumber === 1 ? styles.disabled : styles.active}
                     onClick={() => {
                       if(pageNumber > 1){
                           router.push(`/tech/${pageNumber - 1}`)
                            .then(() => window.scrollTo(0, 0))
                       }
                   }}> 
                   <FaChevronCircleLeft/>
                    </span>
                </div>
                <div>{pageNumber}</div>
                <div >
                    <span className={pageNumber === 5 ? styles.disabled : styles.active}
                     onClick={() => {
                        if(pageNumber < 5){
                            router.push(`/tech/${pageNumber + 1}`)
                            .then(() => window.scrollTo(0, 0))
                        }
                    }} > 
                        <FaChevronCircleRight/>
                    </span>
                </div>
            </div>
        </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {

    const pageNumber = pageContext.query.tec;

    if(!pageNumber || pageNumber < 1 || pageNumber > 5){
        return{
            props: {
                articles: [],
                pageNumber: 1
            }
        }
    }

      const res = await fetch(
        `https://newsapi.org/v2/everything?q=cybersecurity&language=en&pageSize=6&page=${pageNumber}`,
        {
            headers: {
                Authorization: `${process.env.NEWS_KEY}`
            },
        }
        );

    const data = await res.json();
    
    const articles = data;

    return{
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
}