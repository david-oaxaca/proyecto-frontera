import "../Assets/Styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import SubirFoto from "../Pages/SubirFoto";
import SubirDocumento from "../Pages/SubirDocumento";
import Explorar from "../Pages/Explorar";
import Estadisticas from "../Pages/Estadisticas";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Explorar" element={<Explorar />} />
          <Route exact path="/SubirFoto" element={<SubirFoto />} />
          <Route exact path="/SubirDocumento" element={<SubirDocumento />} />
          <Route exact path="/Estadisticas" element={<Estadisticas />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
