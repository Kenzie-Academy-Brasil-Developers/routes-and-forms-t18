import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import "./styles/index.scss";
import 'react-toastify/dist/ReactToastify.css';

function App() {
   return (
      <>
         <RoutesMain />
         <ToastContainer position="bottom-right" autoClose={2000} />
      </>
   );
}

export default App;
