import { useSelector } from "react-redux";

function Username() {
  const Username = useSelector(state=>state.user.username)
  
  if(!Username) return null;
  return <div className="hidden text-sm font-semibold md:block">{Username}</div>;
}

export default Username;
