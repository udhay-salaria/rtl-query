import { Avatar, Code, Spacer, Spinner } from "@nextui-org/react";
import "./App.css";
import { useGetUsersQuery } from "./slices/userSlice";

function App() {
  const { data } = useGetUsersQuery();
  console.log(data);

  return <Spinner label="Loading..." color="warning" />;
}

export default App;
