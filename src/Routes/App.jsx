import '../Assets/Styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import Home from '../Pages/Home';
import SubirFoto from '../Pages/SubirFoto';
import Explorar from '../Pages/Explorar';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Explorar" element={<Explorar/>}/>
          <Route exact path="/SubirFoto" element={<SubirFoto/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
