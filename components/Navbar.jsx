import { useRouter } from "next/router";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    navLinks:{
        paddingLeft: "1rem"
    },
}));
export default function Header() {
	const router = useRouter();

    const classes = useStyles();

	return (
			<AppBar>
                <Toolbar>
                    <Typography variant="h5">Next News</Typography>
                    <div className={classes.navLinks}>
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
                    </div>
                    </Toolbar>
			</AppBar>
	);
}
