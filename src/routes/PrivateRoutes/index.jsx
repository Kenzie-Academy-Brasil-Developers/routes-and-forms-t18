import { Navigate, Outlet } from "react-router";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

// Outlet - semelhante ao children, existe para renderizar uma rota filho
// Navigate - componente que redireciona ao ser renderizado

export const PrivateRoutes = () => {
   const { user } = useContext(UserContext);

   return user ? <Outlet /> : <Navigate to="/" />;
};
