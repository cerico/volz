import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './FormPage.scss'

const initialValues = {
  name: '',
  email: '',
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
})

function FormPage() {

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form values:', values)
  }

  return (
    <div className="form-container">
      <h2>Formik Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" placeholder="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormPage
