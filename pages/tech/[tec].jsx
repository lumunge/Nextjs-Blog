import {useRouter} from 'next/router';
import { FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";
import Navbar from '../../components/Navbar';
import styles from '../../styles/Tech.module.css';
import {Container, Card, CardMedia, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	image: {
		height: 200,
	},
}));

export default function tech({articles, pageNumber}){

    const cyberArticles = articles.articles;
    
    const router = useRouter();

    const classes = useStyles();

    return (
        <Container>
            <Navbar/>
                <p>Random Tech News</p>
        <div className={styles.main}>
            {cyberArticles.map((item, index) => (
                <Card key={index}>
                    <CardMedia image={item.urlToImage} title={item.title} className={classes.image} />
                    <Box>
                        <Typography>{item.title}</Typography>
                        <Typography>{item.description.length > 200 && item.description.substr(0, 200) + '.....'}</Typography>
                    </Box>
                </Card>
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
        </Container>
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