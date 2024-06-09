import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth/useAuth"

import LayoutHeading from "../../components/layouts/LayoutHeading"
import SignUpForm from "./SignUpForm"

const SignUp = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <main className="main-wrapper">
      <LayoutHeading textAlign="center">
        <h2 className="title">PlayGreen App</h2>
        <p className="text">Welcome to Playgreen App, sign up and start reacting!</p>
      </LayoutHeading>

      <SignUpForm />
    </main>
  )
}

export default SignUp