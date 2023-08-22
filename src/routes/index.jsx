import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { ErrorPage } from "../pages/ErrorPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { ScrapProvider } from "../providers/ScrapContext";
import { CreateScrapPage } from "../pages/CreateScrapPage";
import { EditScrapPage } from "../pages/EditScrapPage";

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
            <Route path="/user/create" element={<CreateScrapPage />} /> 
            <Route path="/user/edit" element={<EditScrapPage />} />
         </Route>

         <Route path="*" element={<ErrorPage />} />
      </Routes>
   );
};
