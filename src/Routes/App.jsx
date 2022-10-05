import '../Assets/Styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import Home from '../Pages/Home';
import Galeria from '../Pages/Galeria';
import Analisis from '../Pages/Analisis';
import Documentos from '../Pages/Documentos';
import SubirFoto from '../Pages/SubirFoto';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Galeria" element={<Galeria/>}/>
          <Route exact path="/Analisis" element={<Analisis/>}/>
          <Route exact path="/Documentos" element={<Documentos/>}/>
          <Route exact path="/SubirFoto" element={<SubirFoto/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
