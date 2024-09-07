import { Image } from "@nextui-org/react";
import "./App.css";
import { useGetUsersQuery } from "./slices/userSlice";

function App() {
  const { data } = useGetUsersQuery();
  console.log(data);

  return (
    <Image
      isBlurred
      isZoomed
      width={240}
      src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
      alt="NextUI Album Cover"
      className="m-5"
    />
  );
}

export default App;
