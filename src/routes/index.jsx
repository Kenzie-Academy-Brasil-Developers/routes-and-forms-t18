import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { ErrorPage } from "../pages/ErrorPage";

// Routes - Componente pai de todas as rotas
// Route - Componente para criar uma rota

// Rota: endereço no navegador 

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}