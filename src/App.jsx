import { Routes } from "react-router-dom";
import { RoutesMain } from "./routes";
import { DefaultTemplate } from "./components/DefaultTemplate";

function App() {
   return (
      <>
         <DefaultTemplate>
            <RoutesMain />
         </DefaultTemplate>
      </>
   );
}

export default App;
