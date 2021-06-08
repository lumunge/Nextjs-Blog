import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

export default function Header() {
	const router = useRouter();


	return (
		<>
			<AppBar>
				<Toolbar>
                    <Typography variant="h3">Next News</Typography>
					<Button onClick={() => router.push("/")}>Home</Button>
					<Button onClick={() => router.push("/tech/1")}>Tech</Button>
					<Button
						onClick={() =>
							(window.location.href =
								"https://github.com/lumungep12/Nextjs-Blog")
						}
					>
						Source
					</Button>
				</Toolbar>
			</AppBar>
		</>
	);
}
