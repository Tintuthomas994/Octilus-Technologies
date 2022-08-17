import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const isValidEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
const usePersonal = () => {
    const [gender, setGender] = useState("");
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
        },
        initialErrors: {
            name: "",
            email: "",
            phone: "",
            gender: "",
        },
        onSubmit: async (values) => {
            if (values.name === "") {
                formik.setFieldError("name", "Field Required!");
            } else if (values.email === "") {
                formik.setFieldError("email", "Field Required!");
            } else if (!isValidEmail(values.email)) {
                formik.setFieldError("email", "Invalid Email!");
            } else if (values.phone === "") {
                formik.setFieldError("phone", "Field Required!");
            } else if (values.phone.toString().length !== 10) {
                formik.setFieldError("phone", "Invalid Phone Number!");
            } else if (gender === "") {
                formik.setFieldError("gender", "Field Required!");
            } else {
                let response = await fetch("https://dev.octilus.in/api/create.php", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: values.name,
                        email: values.email,
                        phone: values.phone.toString(),
                        gender: gender,
                    }),
                });
                let responseJson = await response.json();
                //console.log(responseJson);
                if (responseJson.success === true) {
                    navigate("/JobInfo");
                    sessionStorage.setItem("userId", responseJson.id);
                }
            }
        },
    });
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    return {
        formik,
        handleGenderChange,
        gender,
    };
};

export default usePersonal;
