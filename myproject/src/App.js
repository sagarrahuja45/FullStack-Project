import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Signup from "./components/signup ";
import Login from "./components/login";
import CreatePost from "./components/createPost";
import Dashboard from "./components/dashboard";
import { isAuthenticated } from "./utils/auth";

function App() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="createPost"
        element={isAuthenticated() ? <CreatePost /> : <Navigate to="/login" />}
      />{" "}
      <Route
        path="/dashboard"
        element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
