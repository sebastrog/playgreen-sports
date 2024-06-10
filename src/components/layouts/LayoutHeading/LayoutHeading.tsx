import { Heading } from "./LayoutHeading.styles";

interface LayoutHeadingProps {
  children: React.ReactNode;
  textAlign?: 'center' | 'right' | 'left';
}

const LayoutHeading: React.FC<LayoutHeadingProps> = ({children, textAlign = "left" }) => {
  return (
    <Heading $textAlign={textAlign}>
      {children}
    </Heading>
  )
}

export default LayoutHeading