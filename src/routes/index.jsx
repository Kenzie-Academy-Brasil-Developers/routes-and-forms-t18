import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { ErrorPage } from "../pages/ErrorPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { DashboardPage } from "../pages/DashbordPage";
import { PublicRoutes } from "./PublicRoutes";
import { NewsPage } from "../pages/NewsPage";

export const RoutesMain = () => {
   return (
      <Routes>
         {/* Rotas que somente usuários DESLOGADOS conseguirão acessar */}
         <Route element={<PublicRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
         </Route>
         
         {/* Rotas que somente usuários LOGADOS conseguirão acessar */}
         <Route element={<PrivateRoutes />}>
            <Route path="/user" element={<UserPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
         </Route>

         {/* Rotas livres para ambas as situações */}
         <Route path="/news" element={<NewsPage />} />
         <Route path="*" element={<ErrorPage />} />
      </Routes>
   );
};
