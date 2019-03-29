import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Formik, Form, FormikErrors } from 'formik'
import * as Yup from 'yup'

interface IFormValues {
  email: string
  password: string
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().min(8)
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => setSubmitting(false), 3 * 1000)
            }}
          >
            {props => (
              <Form>
                <label htmlFor="email">Email</label>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your account email"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  {props.errors.email && props.touched.email && (
                    <div style={{ color: 'red' }}>{props.errors.email}</div>
                  )}
                </div>
                <label htmlFor="password">Password</label>
                <div>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your account password"
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  {props.errors.password && props.touched.password && (
                    <div style={{ color: 'red' }}>{props.errors.password}</div>
                  )}
                </div>
                <input
                  type="submit"
                  value="Submit"
                  disabled={props.isSubmitting}
                />
                &nbsp;
                <input
                  type="reset"
                  value="Reset"
                  onClick={props.handleReset}
                  disabled={!props.dirty || props.isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </header>
      </div>
    )
  }
}

export default App
