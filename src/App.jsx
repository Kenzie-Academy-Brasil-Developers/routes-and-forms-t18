import { RoutesMain } from "./routes";
import { DefaultTemplate } from "./components/DefaultTemplate";
import "./styles/index.scss";

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
