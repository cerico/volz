import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useTheme } from "../contexts"
import styled from '@emotion/styled'

const FormPage = () => {
  const { theme } = useTheme()

  return (
    <FormContainer className={theme}>
      <h2 style={{
        color: theme === "light" ? "coral" : "lightblue",
      }}>Form Page</h2>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false)
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  margin: 50px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-width: 400px;
  background-color: #f9f9f9;

  h2 {
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }

  .error {
    color: red;
    font-size: 0.875em;
    margin-top: 5px;
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`

export default FormPage
