
type Props = {
  children : React.ReactNode;
}
const Centered = ({children} : Props) => {
  return <div className="flex justify-center items-center min-h-screen p10 ">{children}</div>
};

export default Centered;
