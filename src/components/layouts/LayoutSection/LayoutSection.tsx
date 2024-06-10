
interface LayoutSectionProps {
  children: React.ReactNode;
}

const LayoutSection: React.FC<LayoutSectionProps> = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}

export default LayoutSection;