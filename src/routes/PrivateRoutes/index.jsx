import { Navigate, Outlet } from "react-router";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { ScrapProvider } from "../../providers/ScrapContext";

// Outlet - semelhante ao children, existe para renderizar uma rota filho
// Navigate - componente que redireciona ao ser renderizado

export const PrivateRoutes = () => {
   const { user } = useContext(UserContext);

   return user ? <ScrapProvider><Outlet /></ScrapProvider> : <Navigate to="/" />;
};
