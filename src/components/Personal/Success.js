import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Container } from "@material-ui/core";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const UseStyles = makeStyles((theme) => ({
    mainGrid: {
        background: "white",
        marginTop: "200px",
    },
    subGrid: {
        marginTop: "25px",
    },
    mainText: {
        color: "black",
        fontWeight: "800",
        fontSize: "38px",
        fontStyle: "normal",
    },
    subText: {
        color: "#747474",
        fontWeight: "500",
        fontSize: "18px",
        fontStyle: "normal",
    },
    icon: {
        color: "#32cd32",
        //fontSize: "200%"
    },
}));
const Success = () => {
    const classes = UseStyles();

    return (
        <Container maxWidth="lg">
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={classes.mainGrid}
            >
                <CheckCircleOutlinedIcon
                    sx={{ fontSize: 100 }}
                    className={classes.icon}
                />

                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className={classes.subGrid}
                >
                    <Typography className={classes.mainText}>
                        Application Submitted
                    </Typography>
                </Grid>

                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className={classes.subGrid}
                >
                    <Typography className={classes.subText}>
                        Thanks for your interest!
                    </Typography>
                </Grid>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className={classes.subGrid}
                >
                    <Typography className={classes.subText}>
                        Our review team will review your application and call you for the
                        interview
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Success;
