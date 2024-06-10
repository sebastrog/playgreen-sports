import { LoadingContainer, Spinner } from './LoadingWrapper.styles'

interface LoadingWrapperProps {
  height?: string;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({height}) => {
  return (
    <LoadingContainer height={height}>
      <Spinner />
    </LoadingContainer>
  )
}

export default LoadingWrapper