import "./App.css";

import {
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Grid,
    Avatar,
} from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import RedditIcon from "@material-ui/icons/Reddit";
import { makeStyles } from "@material-ui/styles";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "700px",
        margin: "0 auto",
    },
    headingText: {
        fontWeight: "700",
        fontSize: "7em",
        marginTop: "100px",
        width: "100%",
        textAlign: "center",
    },
    subHeadingText: {
        fontWeight: "500",
        fontSize: "20px",
        marginTop: "45px",
        textAlign: "center",
        color: "#696969",
    },
    gridCardContainer: {
        marginTop: "50px",
    },
    cardContainer: {
        transition: "transform .1s ease-in-out",
        "&:hover": {
            transform: "rotate(2deg)",
        },
    },
    img: {
        height: "35vh",
        width: "94%",
        padding: "10px",
        "&:hover": {},
    },
    name: {
        textAlign: "center",
        fontSize: "20px",
    },
    iconContainer: {
        marginTop: "10vh",
        marginBottom: "100px",
        width: "100%",
    },
    subIconContainer: {
        width: "100%",
        "&:hover": {
            transform: "translateY(-5px)",
        },
    },
    iconBorder: {
        height: "50px",
        width: "50px",
        backgroundColor: "black",
    },
    icon: {
        fontSize: "30px",
        width: "100%",
    },
});

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography
                variant="h1"
                component="h2"
                className={classes.headingText}
            >
                Hi!
            </Typography>
            <Typography
                variant="body2"
                component="h2"
                className={classes.subHeadingText}
            >
                Risus letanie feugiat posuere urna tincidunt present. Interdum
                varius vincit laoreet quis susurrus nunc massa etiam in ante
                metus.
            </Typography>
            <Grid container spacing={2} className={classes.gridCardContainer}>
                {cards.map((card) => (
                    <Grid item key={card.id} xs={12} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.img}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    src={card.img}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        className={classes.name}
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {card.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Grid container className={classes.iconContainer}>
                <Grid item xs={2} className={classes.subIconContainer}>
                    <Avatar className={classes.iconBorder}>
                        <FacebookIcon className={classes.icon} />
                    </Avatar>
                </Grid>
                <Grid item xs={2} className={classes.subIconContainer}>
                    <Avatar className={classes.iconBorder}>
                        <InstagramIcon className={classes.icon} />
                    </Avatar>
                </Grid>
                <Grid item xs={2} className={classes.subIconContainer}>
                    <Avatar className={classes.iconBorder}>
                        <TwitterIcon className={classes.icon} />
                    </Avatar>
                </Grid>
                <Grid item xs={2} className={classes.subIconContainer}>
                    <Avatar className={classes.iconBorder}>
                        <RedditIcon className={classes.icon} />
                    </Avatar>
                </Grid>
                <Grid item xs={2} className={classes.subIconContainer}>
                    <Avatar className={classes.iconBorder}>
                        <LinkedInIcon className={classes.icon} />
                    </Avatar>
                </Grid>
                <Grid item xs={2} className={classes.subIconContainer}>
                    <Avatar className={classes.iconBorder}>
                        <PinterestIcon className={classes.icon} />
                    </Avatar>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;

const cards = [
    {
        id: 1,
        img: img1,
        name: "Turpis egestas",
    },
    {
        id: 2,
        img: img2,
        name: "Morbi tristique",
    },
    {
        id: 3,
        img: img3,
        name: "Quam lacus",
    },
    {
        id: 4,
        img: img4,
        name: "Porttitor neque",
    },
    {
        id: 5,
        img: img5,
        name: "Sem astrum",
    },
    {
        id: 6,
        img: img6,
        name: "Lectus urna",
    },
];
