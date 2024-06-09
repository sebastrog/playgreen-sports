import LayoutHeading from "../../components/layouts/LayoutHeading"

import { Form } from "./Login.styles"
import LoginForm from "./LoginForm"

const Login = () => {
  return (
    <main className="main-wrapper">
      <LayoutHeading textAlign="center">
        <h2 className="title">PlayGreen App</h2>
        <p className="text">Welcome to Playgreen App, log in and start reacting!</p>
      </LayoutHeading>
      <Form>
        <LoginForm />
      </Form>
    </main>
  )
}

export default Login