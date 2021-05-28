import { useSelector } from "react-redux";

import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const auth = useSelector((state) => state.auth);
  console.log({ auth });
  return (
    <>
      <Header />
      {!auth.isAuthenticated ? <Auth /> : <UserProfile />}
    </>
  );
}

export default App;
