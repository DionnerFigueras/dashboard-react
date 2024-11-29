import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Estudiantes from "./pages/Estudiantes";
import Profesores from "./pages/Profesores";
import Asignaturas from "./pages/Asignaturas";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" exact={true} Component={Dashboard} />
            <Route path="/estudiantes" exact={true} Component={Estudiantes} />
            <Route path="/profesores" exact={true} Component={Profesores} />
            <Route path="/asignaturas" exact={true} Component={Asignaturas} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
