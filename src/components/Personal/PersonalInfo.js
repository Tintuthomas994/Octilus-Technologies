import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider, Button } from "@material-ui/core";
import SideHeader from "./SideHeader";
import PersonalUseForm from "./usePersonal";
import "../../assets/styles/styles.scss";

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
    formGrid: {
        marginTop: "25px",
    },
    genderGrid: {
        marginTop: "20px",
        marginLeft: "10px",
    },
    largeDivider: {
        backgroundColor: "red",
        width: "368px",
        position: "relative",
        top: "-3px",
        marginLeft: "30px",
        height: "1px",
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
const PersonalInfo = () => {
    const classes = UseStyles();
    const { formik, handleGenderChange, gender } = PersonalUseForm();
    return (
        <Grid>
            <Grid>
                <SideHeader />
            </Grid>
            <form onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
                <Grid className={classes.splitRight}>
                    <Typography className={classes.mainText}>
                        Personal Information
                    </Typography>
                    <Grid className={classes.formGrid}>
                        <input
                            placeholder="Name"
                            id="name"
                            name="name"
                            type="text"
                            className="textInput"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.errors.name ? (
                            <>
                                <Typography className="textInputError">
                                    {formik.errors.name}
                                </Typography>
                            </>
                        ) : null}
                    </Grid>
                    <Grid className={classes.formGrid}>
                        <input
                            placeholder="Email Address"
                            id="email"
                            name="email"
                            type="text"
                            className="textInput"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />

                        {formik.errors.email ? (
                            <>
                                <Typography className="textInputError">
                                    {formik.errors.email}
                                </Typography>
                            </>
                        ) : null}
                    </Grid>
                    <Grid className={classes.formGrid}>
                        <input
                            placeholder="Phone"
                            id="phone"
                            name="phone"
                            type="number"
                            className="textInput"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />

                        {formik.errors.phone ? (
                            <>
                                <Typography className="textInputError">
                                    {formik.errors.phone}
                                </Typography>
                            </>
                        ) : null}
                    </Grid>
                    <Grid className={classes.formGrid}>
                        <Typography className={classes.mainText}>Select Gender</Typography>
                        <Grid
                            direction="row"
                            xs={4}
                            container
                            className={classes.formGrid}
                            justifyContent="space-around"
                        >
                            <Grid className="male-box">
                                <Grid className={classes.genderGrid}>
                                    <input
                                        id="gender"
                                        type="radio"
                                        className={classes.genderBox}
                                        value="male"
                                        checked={gender === "male"}
                                        onChange={handleGenderChange}
                                    />{" "}
                                    Male
                                </Grid>
                            </Grid>

                            <Grid className="male-box">
                                <Grid className={classes.genderGrid}>
                                    <input
                                        type="radio"
                                        id="gender"
                                        value="female"
                                        checked={gender === "female"}
                                        onChange={handleGenderChange}
                                    />{" "}
                                    Female
                                </Grid>
                            </Grid>
                            {gender === "" ? (
                                <>
                                    <Typography className="genderInputError">
                                        {formik.errors.gender}
                                    </Typography>
                                </>
                            ) : null}
                        </Grid>
                    </Grid>
                    <Grid className={classes.Button}>
                        <Button type="submit" className="btn-large">
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
};

export default PersonalInfo;
