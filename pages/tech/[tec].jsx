import {useRouter} from 'next/router';
import { FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";
import Header from '../../components/Header';
import styles from '../../styles/Tech.module.css';

export default function tech({articles, pageNumber}){

    // const sciArticles = articles.articles;

    // console.log(sciArticles);
    
    const router = useRouter();

    return (
        <div className={styles.science}>
            <Header/>
        <div className={styles.main}>
            <h1>Main Main Main</h1>
            {/* {sciArticles.map((item, index) => (
                <div key={index} className={styles.article}>
                    <div className={styles.itemImg}>
                        <img src={item.urlToImage} alt={item.title} />
                    </div>
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.description.length > 200 && item.description.substr(0, 200) + '.....'}</p>
                    </div>
                </div>
            ))} */}
            <div className={styles.paginator}>
                <div>
                   <button onClick={() => {
                       if(pageNumber > 1){
                           router.push(`/tech/${pageNumber - 1}`)
                            .then(() => window.scrollTo(0, 0))
                       }
                   }} className={pageNumber === 1 ? styles.disabled : styles.active}> 
                   <FaChevronCircleLeft/>
                    </button>
                </div>
                <div>{pageNumber}</div>
                <div>
                    <button onClick={() => {
                        if(pageNumber < 5){
                            router.push(`/tech/${pageNumber + 1}`)
                            .then(() => window.scrollTo(0, 0))
                        }
                    }} className={pageNumber === 5 ? styles.disabled : styles.active}> 
                        <FaChevronCircleRight/>
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {

    const pageNumber = pageContext.query.sci;

    if(!pageNumber || pageNumber < 1 || pageNumber > 5){
        return{
            props: {
                articles: [],
                pageNumber: 1
            }
        }
    }

      const res = await fetch(
        `https://newsapi.org/v2/everything?q=cybersecurity&language=en&pageSize=6page=${pageNumber}`,
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