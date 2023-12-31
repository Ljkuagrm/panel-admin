import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth";
//Pages Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
//Pages Admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";
import Catalogo  from "./pages/auth/Catalogo";



function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LayoutAuth />}>
        <Route index element={<Login />} />
        <Route path="registro" element={<Register />} />
        <Route path="olvide-password" element={<ForgetPassword />} />
        <Route path="catalago" element={<Catalogo />} />
      </Route>

      <Route path="/home" element={<Catalogo />} />

      <Route path="/" element={<LayoutAdmin />}>
        <Route index element={<Home />} />
        <Route path="perfil" element={<Profile />} />
        <Route path="chat" element={<Chat />} />
      </Route>

      <Route path="*" element={<Error404 />} />

    </Routes>
  </BrowserRouter>
}

export default App
