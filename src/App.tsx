import { NavBar, Footer } from "./layout";
import "./App.css";
import AppRoutes from "./app-routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
