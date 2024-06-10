import {
  NotSportsFound,
  NotSportsFoundText,
} from "./LayoutNotFound.styles";

interface LayoutNotFoundProps {
  children: React.ReactNode;
}

const LayoutNotFound: React.FC<LayoutNotFoundProps> = ({children}) => {
  return (
    <NotSportsFound>
      <NotSportsFoundText>
        {children}
      </NotSportsFoundText>
    </NotSportsFound>
  )
}

export default LayoutNotFound