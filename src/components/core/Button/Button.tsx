import { CustomButton } from './Button.styles'

interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({title, onClick, disabled}) => {
  return (
    <>
      <CustomButton onClick={onClick} disabled={disabled}>{title}{disabled ? "..." : ""}</CustomButton>
    </>
  )
}

export default Button