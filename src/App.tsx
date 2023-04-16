import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./contexts/AuthContext";


const App = () =>(<AuthProvider><AppRoutes /></AuthProvider>)

export default App
