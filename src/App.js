import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/*' element={<PrivateRoute><Layout/></PrivateRoute>}/>
        </Routes>
    </>
  );
}

export default App;
