import { TextFieldContainer, InputCustom, Label } from "./TextField.styles"

interface TextFieldProps {
  type: string;
  name: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField: React.FC<TextFieldProps> = ({type, name, label, onChange}) => {
  return (
    <TextFieldContainer>
      <InputCustom type={type} name={name} onChange={onChange} placeholder=" "/>
      <Label htmlFor={name}>{label}</Label>
    </TextFieldContainer>
  )
}

export default TextField