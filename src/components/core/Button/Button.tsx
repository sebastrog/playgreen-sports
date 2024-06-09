import { CustomButton } from './Button.styles'

interface ButtonProps {
  title: string;
  onClick?: () => void;
  disabled: boolean;
  type: "submit" | "button"
}

const Button: React.FC<ButtonProps> = ({title, onClick, type, disabled}) => {
  return (
    <>
      <CustomButton onClick={onClick} type={type} disabled={disabled}>{title}{disabled ? "..." : ""}</CustomButton>
    </>
  )
}

export default Button