import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import toast from "react-hot-toast";

import {auth, db} from '../../../firebase'

import useForm from "../../../hooks/form/useForm";

import TextField from "../../../components/core/TextField"
import Button from "../../../components/core/Button"

import { FirebaseError } from "../../../types/firebase/firabaseBackErrors.types";

import { FormContainer, FormCta } from './SignUpForm.styles';

const SignUpForm = () => {
  const { formData, loading, setLoading, handleChange } = useForm({ email: '', password: '' });

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) return;
    
    setLoading(true);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      if (user) {
        const initialData = {
          email: user.email,
          reactions: []
        };
  
        try {
          await setDoc(doc(db, 'users', user.uid), initialData);
          toast.success("Your information has been created successfully!");
        } catch (error) {
          const firebaseError = error as FirebaseError;
          const errorMessage = firebaseError.message;
          toast.error(`Error adding info to database: ${errorMessage}`);
        }
      }
    } catch (error) {
      const firebaseError = error as FirebaseError;
      const errorMessage = firebaseError.message;
      toast.error(`Error creating your account: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSignUp}>
      <TextField type="email" name="email" label="User" onChange={handleChange} />
      <TextField type="password" name="password" label="Password"onChange={handleChange} />
      <FormCta>
        <Button title="Sign Up" type="submit" disabled={loading} />
        <Link to="/signup">Create an account</Link>
      </FormCta>
    </FormContainer>
  )
}

export default SignUpForm