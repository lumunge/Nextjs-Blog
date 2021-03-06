import Head from "next/head";
import Navbar from "../components/Navbar";
import {
	Container,
	Grid,
	Typography,
	Card,
	CardMedia,
	Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	main: {
		padding: "6rem 0",
	},
	title: {
		borderLeft: "2px solid #2ecc71",
		padding: "1rem 0 1rem 1rem",
	},
	image: {
		height: 200,
	},
}));

export default function Home({ js, prog, ether, nextjs, block }) {
	const jsArticles = js.articles;
	const progArticles = prog.articles;
	const etherArticles = ether.articles;
	const nextjsArticles = nextjs.articles;
	const blockArticles = block.articles;

	const classes = useStyles();

	if (!js && !prog && !ether && !nextjs && !block)
		return <div>Loading Data</div>;

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<Navbar />
			</header>

			<Container className={classes.main}>
				<div>
					<Typography className={classes.title} variant="h5">
						Javascript
					</Typography>
					<Grid container spacing={2}>
						{jsArticles.map((item, index) => (
							<Grid item xs={12} sm={4}>
								<Card key={index}>
									<CardMedia
										className={classes.image}
										image={item.urlToImage}
										title={item.title}
										onClick={() =>
											(window.location.href = item.url)
										}
									/>
									<Box py={3} px={2}>
										<Typography variant="h6">
											{item.title}
										</Typography>
										<Typography>
											{item.publishedAt}
										</Typography>
									</Box>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
				<div>
					<Typography className={classes.title} variant="h5">
						Programming
					</Typography>
					<Grid container spacing={2}>
						{progArticles.map((item, index) => (
							<Grid item xs={12} sm={4}>
								<Card key={index}>
									<div>
										<CardMedia
											className={classes.image}
											image={item.urlToImage}
											title={item.title}
											onClick={() =>
												(window.location.href =
													item.url)
											}
										/>
										<Box py={3} px={2}>
											<Typography variant="h5">
												{item.title}
											</Typography>
											<Typography>
												{item.publishedAt}
											</Typography>
										</Box>
									</div>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
				<div>
					<Typography className={classes.title} variant="h5">
						Etherium
					</Typography>
					<Grid container spacing={2}>
						{etherArticles.map((item, index) => (
							<Grid item xs={12} sm={4}>
								<Card key={index}>
									<div>
										<CardMedia
											className={classes.image}
											image={item.urlToImage}
											title={item.title}
											onClick={() =>
												(window.location.href =
													item.url)
											}
										/>
										<Box py={3} px={2}>
											<Typography variant="h5">
												{item.title}
											</Typography>
											<Typography>
												{item.publishedAt}
											</Typography>
										</Box>
									</div>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
				<div>
					<Typography className={classes.title} variant="h5">
						Next Js
					</Typography>
					<Grid container spacing={2}>
						{nextjsArticles.map((item, index) => (
							<Grid item xs={12} sm={4}>
								<Card key={index}>
									<div>
										<CardMedia
											className={classes.image}
											image={item.urlToImage}
											title={item.title}
											onClick={() =>
												(window.location.href =
													item.url)
											}
										/>
										<Box py={3} px={2}>
											<Typography variant="h5">
												{item.title}
											</Typography>
											<Typography>
												{item.publishedAt}
											</Typography>
										</Box>
									</div>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
				<div>
					<Typography className={classes.title} variant="h5">
						Blockchain
					</Typography>
					<Grid container spacing={2}>
						{blockArticles.map((item, index) => (
							<Grid item xs={12} sm={4}>
								<Card key={index}>
									<div>
										<CardMedia
											className={classes.image}
											image={item.urlToImage}
											title={item.title}
											onClick={() =>
												(window.location.href =
													item.url)
											}
										/>
										<Box py={3} px={2}>
											<Typography variant="h5">
												{item.title}
											</Typography>
											<Typography>
												{item.publishedAt}
											</Typography>
										</Box>
									</div>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</Container>

			<footer className="footer">
				<p>All Rights Reserved NextNewsZZ</p>
			</footer>
		</div>
	);
}

export const getServerSideProps = async (pageContext) => {
	const [jsRes, progRes, etherRes, nextRes, blockRes] = await Promise.all([
		fetch(
			`https://newsapi.org/v2/everything?q=javascript&language=en&pageSize=6`,
			{
				headers: {
					Authorization: `${process.env.NEWS_KEY}`,
				},
			}
		),
		fetch(
			`https://newsapi.org/v2/everything?q=programming&language=en&pageSize=6`,
			{
				headers: {
					Authorization: `${process.env.NEWS_KEY}`,
				},
			}
		),
		fetch(
			`https://newsapi.org/v2/everything?q=etherium&language=en&pageSize=6`,
			{
				headers: {
					Authorization: `${process.env.NEWS_KEY}`,
				},
			}
		),
		fetch(
			`https://newsapi.org/v2/everything?q=nextjs&language=en&pageSize=6`,
			{
				headers: {
					Authorization: `${process.env.NEWS_KEY}`,
				},
			}
		),
		fetch(
			`https://newsapi.org/v2/everything?q=blockchain&language=en&pageSize=6`,
			{
				headers: {
					Authorization: `${process.env.NEWS_KEY}`,
				},
			}
		),
	]);
	const [js, prog, ether, nextjs, block] = await Promise.all([
		jsRes.json(),
		progRes.json(),
		etherRes.json(),
		nextRes.json(),
		blockRes.json(),
	]);

	return {
		props: {
			js,
			prog,
			ether,
			nextjs,
			block,
		},
	};
};
