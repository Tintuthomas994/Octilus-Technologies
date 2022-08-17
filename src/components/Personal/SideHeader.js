import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Item } from "@material-ui/core";
import PepoleIcon from "../../assets/images/people.jpeg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const UseStyles = makeStyles((theme) => ({
    splitLeft: {
        height: "100%",
        left: "0",
        width: "50%",
        backgroundSize: 'cover',
        position: "fixed",
        backgroundImage: `linear-gradient(
            rgba(23, 19, 19, 0.8),
            rgba(23, 19, 19, 0.8)
            ), url(${PepoleIcon})`,
    },
    joinText: {
        color: "#ffffff",
        fontWeight: "800",
        fontSize: "28px",
        fontStyle: "normal",
    },
    subText: {
        color: "#ffffff",
        fontWeight: "500",
        fontSize: "18px",
        fontStyle: "normal",
        marginTop: "20px"
    },
    subGrid: {
        marginTop: "200px",
        marginLeft: "130px",
    },
    finalGrid: {
        marginTop: "340px",
        marginLeft: "30px",
    },
    iconGrid: {
        marginTop: "20px",
        marginLeft: "130px",
    },
    icon: {
        color: 'white',
        marginLeft: "10px"
    }
}));
const SideHeader = () => {
    const classes = UseStyles();

    return (
        <Grid className={classes.splitLeft}>
            <Grid className={classes.subGrid}>
                <Typography className={classes.joinText}>Let Join with us!</Typography>
                <Typography className={classes.subText}>Lorem Ipsum es simplemente.</Typography>
            </Grid>
            <Grid direction="row" container className={classes.finalGrid}>

                <Grid item xs={6}>
                    <Typography className={classes.subText}>Copyright@2022 Octilus Technologies</Typography>
                </Grid>
                <Grid className={classes.iconGrid} >
                    <FacebookIcon style={{ color: 'white' }} />
                    <TwitterIcon className={classes.icon} />
                    <LinkedInIcon className={classes.icon} />
                    <InstagramIcon className={classes.icon} />
                </Grid>


            </Grid>


        </Grid >
    );
};

export default SideHeader;