import '../Assets/Styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import Home from '../Pages/Home';
import Galeria from '../Pages/Galeria';
import Analisis from '../Pages/Analisis';
import Rutas from '../Pages/Rutas';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Galeria" element={<Galeria/>}/>
          <Route exact path="/Analisis" element={<Analisis/>}/>
          <Route exact path="/Rutas" element={<Rutas/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
