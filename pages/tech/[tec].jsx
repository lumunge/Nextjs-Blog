import {useRouter} from 'next/router';
import { FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";
import Navbar from '../../components/Navbar';
import styles from '../../styles/Tech.module.css';
import {Container, Grid,Card, CardMedia, Typography, Box} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    main:{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "6rem",
    },
    card:{
        width: "500px",
        height: "400px",
        margin: "2rem 0"
    },
	image: {
		height: 200,
	},
    title: {
		borderLeft: "2px solid #2ecc71",
		padding: "1rem 0 1rem 1rem",
	},
    paginator: {
        display: "flex",
        padding: "2rem 0"
    }
}));

export default function tech({articles, pageNumber}){

    const cyberArticles = articles.articles;
    
    const router = useRouter();

    const classes = useStyles();

    return (
        <Container>
            <Navbar/>
            <div className={classes.main}>
                <Typography className={classes.title} variant="h5">
                Random Tech News
					</Typography>
                
            {cyberArticles.map((item, index) => (
                <Card key={index} className={classes.card}>
                    <CardMedia image={item.urlToImage} title={item.title} className={classes.image} />
                    <Box>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="subtitle1">{item.description.length > 200 && item.description.substr(0, 200) + '.....'}</Typography>
                    </Box>
                </Card>
             
            ))}
            <Box className={classes.paginator}>
                <div>
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
                <Typography>{pageNumber}</Typography>
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
            </Box>
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