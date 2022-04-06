import GroceryCart from "./pages/WelcomePage/GroceryCart";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home Page</Link> | <Link to="/alcoholic">Alcoholic</Link> |{" "}
        <Link to="/nonalcoholic">NonAlcoholic</Link> |{" "}
      </nav>
    </div>
  );
};
export default App;
