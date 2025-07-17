import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate()
    localStorage.clear()
    const validate = values => {
        const errors = {};

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8 && (!/[0-9]/.test(values.password) || !/[a-z]/.test(values.password) || !/[A-Z]/.test(values.password))) {
            errors.password = 'Must be 8 characters or more and include at least one uppercase letter, one lowercase letter, and one number';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateOnBlur: true,
        onSubmit: values => {
            console.log(JSON.stringify(values))
            if (values.email !== " " && values.password !== "") {
                localStorage.setItem("user", JSON.stringify(values))
            }
            navigate('/main')
        },
    });

    // Removed redundant handleChange function since Formik's handleChange is used
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div style={{ color: 'red' }}>{formik.errors.email}</div>
            ) : null}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div style={{ color: 'red' }}>{formik.errors.password}</div>
            ) : null}
            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
        </form>
    )
}