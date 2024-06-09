import TextField from "../../../components/core/TextField"
import Button from "../../../components/core/Button"
import { FormCta } from './LoginForm.styles';

const LoginForm = () => {
  return (
    <>
      <TextField type="email" name="email" label="User" />
      <TextField type="password" name="password" label="Password"/>
      <FormCta>
        <Button title="Login" />
      </FormCta>
    </>
  )
}

export default LoginForm