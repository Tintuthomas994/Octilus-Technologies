import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider, Button } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SideHeader from "./SideHeader";

const UseStyles = makeStyles((theme) => ({
    splitRight: {
        height: "100%",
        right: "0",
        width: "50%",
        background: "white",
        position: "fixed",
        zindex: "1",
        top: "0",
        overflow: "hidden",
        paddingTop: "20px",
        paddingLeft: "90px",
    },
    mainText: {
        color: "black",
        fontWeight: "800",
        fontSize: "38px",
        fontStyle: "normal",
    },
    termsText: {
        color: "black",
        fontWeight: "500",
        fontSize: "18px",
        fontStyle: "normal",
        marginLeft: "5px",
    },
    policyText: {
        color: "#32cd32",
        fontWeight: "500",
        fontSize: "18px",
        fontStyle: "normal",
        marginLeft: "5px",
    },
    prevText: {
        color: "#747474",
        fontWeight: "500",
        fontSize: "18px",
        fontStyle: "normal",
        marginLeft: "5px",
    },
    formGrid: {
        marginTop: "25px",
    },
    largeDivider: {
        backgroundColor: "#747474",
        width: "500px",
        marginTop: "30px",
        marginLeft: "7px",
        height: "2px",
    },
    icon: {
        color: "#747474",
    },
    Button: {
        paddingTop: "40px",
        paddingBottom: "30px",
        fontStyle: "normal",
        color: "white",
        fontWeight: "800",
        fontSize: "38px",
    },
}));
const JobInfo = () => {
    const classes = UseStyles();
    const [isChecked, setIsChecked] = useState(false);
    const [job, setJob] = useState("");
    const [jobError, setJobError] = useState("");
    const [termsError, setTermsError] = useState("");
    const navigate = useNavigate();

    const handleJobChange = (event) => {
        setJob(event.target.value);
    };
    const handleTerms = () => {
        setIsChecked(!isChecked);
    };
    const handleBack = () => {
        navigate("/");
    };
    async function handleSubmit() {
        const userId = sessionStorage.getItem("userId");
        if (job === "") {
            setJobError("Job Field Required!");
        } else if (isChecked === false) {
            setTermsError("Accept Terms of Service!");
        } else {
            try {
                let response = await fetch("https://dev.octilus.in/api/update.php", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: userId,
                        job_title: job,
                    }),
                });
                let responseJson = await response.json();
                // console.log(responseJson)
                if (responseJson.success === true) {
                    sessionStorage.clear();
                    navigate("/Success");
                }
            } catch (err) {
                console.log(err.message);
            }
        }
    }
    return (
        <Grid>
            <Grid>
                <SideHeader />
            </Grid>
            <Grid className={classes.splitRight}>
                <Grid
                    direction="row"
                    onClick={handleBack}
                    container
                    className={classes.formGrid}
                >
                    <ArrowBackIcon className={classes.icon}></ArrowBackIcon>
                    <Typography className={classes.prevText}>PERVIOUS SETP</Typography>
                </Grid>
                <Grid className={classes.formGrid}>
                    <Typography className={classes.mainText}>
                        Select Job Position
                    </Typography>
                </Grid>
                <Divider className={classes.largeDivider} />
                <Grid className={classes.formGrid}>
                    <input
                        type="radio"
                        value="Frontend Developer"
                        checked={job === "Frontend Developer"}
                        onChange={handleJobChange}
                    />
                    Frontend Developer
                </Grid>
                <Grid className={classes.formGrid}>
                    <input
                        type="radio"
                        className="specifyColor"
                        value="WordPress Developer"
                        checked={job === "WordPress Developer"}
                        onChange={handleJobChange}
                    />
                    WordPress Developer
                </Grid>
                <Grid className={classes.formGrid}>
                    <input
                        type="radio"
                        value="UI/UX Designer"
                        checked={job === "UI/UX Designer"}
                        onChange={handleJobChange}
                    />
                    UI/UX Designer
                </Grid>
                <Grid className={classes.formGrid}>
                    <input
                        type="radio"
                        value="Support Engineer"
                        checked={job === "Support Engineer"}
                        onChange={handleJobChange}
                    />
                    Support Engineer
                </Grid>
                <Grid className={classes.formGrid}>
                    <input
                        type="radio"
                        value="Graphic Designer"
                        checked={job === "Graphic Designer"}
                        onChange={handleJobChange}
                    />
                    Graphic Designer
                </Grid>
                <Grid className={classes.formGrid}>
                    {job === "" ? (
                        <>
                            <Typography className="genderInputError">{jobError}</Typography>
                        </>
                    ) : null}
                </Grid>
                <Grid container direction="row" className={classes.formGrid}>
                    <input type="checkbox" checked={isChecked} onChange={handleTerms} />
                    <Typography className={classes.termsText}>I Accept The </Typography>
                    <Typography className={classes.policyText}>
                        Terms Of Condition{" "}
                    </Typography>
                    <Typography className={classes.termsText}>And </Typography>
                    <Typography className={classes.policyText}>
                        Privacy Policy{" "}
                    </Typography>
                </Grid>
                <Grid className={classes.formGrid}>
                    {isChecked === false ? (
                        <>
                            <Typography className="termsInputError">{termsError}</Typography>
                        </>
                    ) : null}
                </Grid>

                <Grid className={classes.Button}>
                    <Button type="submit" className="btn-large" onClick={handleSubmit}>
                        SUBMIT
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default JobInfo;
