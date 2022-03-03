import Layout from "./layout";
import Routes from "./routes/routes";
import { AuthContext } from "./context/auth";

function App() {
  return (
    <AuthContext>

        <Routes.AppRoutes />
  
    </AuthContext>
  );
}

export default App;
