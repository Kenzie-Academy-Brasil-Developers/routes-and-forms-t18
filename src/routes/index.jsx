import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { ErrorPage } from "../pages/ErrorPage";
import { useState } from "react";

export const RoutesMain = () => {
    // estado não é persistente
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const userLogout = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
     }

    return(
        <Routes>
            <Route path="/" element={<HomePage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage user={user} userLogout={userLogout} />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}