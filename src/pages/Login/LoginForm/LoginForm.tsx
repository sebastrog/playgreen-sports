import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

import {auth} from '../../../firebase'

import useForm from "../../../hooks/form/useForm";

import TextField from "../../../components/core/TextField"
import Button from "../../../components/core/Button"

import { FormContainer, FormCta } from './LoginForm.styles';


interface FirebaseErrorDetails {
  message: string;
  domain: string;
  reason: string;
}

interface FirebaseError {
  code: number;
  message: string;
  errors: FirebaseErrorDetails[];
}

/* export type { FirebaseError, FirebaseErrorDetails }; */


const LoginForm = () => {
  const { formData, loading, setLoading, handleChange } = useForm({ email: '', password: '' });

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) return;

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Successfully logged in!');
    } catch (error) {
      const firebaseError = error as FirebaseError;
      const errorMessage = firebaseError.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <FormContainer onSubmit={handleSignUp}>
      <TextField type="email" name="email" label="User" onChange={handleChange} />
      <TextField type="password" name="password" label="Password"onChange={handleChange} />
      <FormCta>
        <Button title="Login" type="submit" disabled={loading} />
        <Link to="/signup">Create an account</Link>
      </FormCta>
    </FormContainer>
  )
}

export default LoginForm