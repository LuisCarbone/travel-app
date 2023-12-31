import './App.css'
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavigationBar from './components/navigationBar/NavigationBar';
import Cards from './components/cards/Cards';
import FormExp from './components/formExp/FormExp';
import Login from './components/login/Login';
import Detail from './components/detail/Detail';
import Footer from './components/footer/Footer';

function App() {

  const url = "https://my-app-three-flame.vercel.app/data.json";

  const [ data, setData ] = useState ( null );
  const [ isLoged, setIsLoged ] = useState (false);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(url)
        if (!response.ok){
          throw new Error('No se pudo obtener la data')
        }
        const result = await response.json()

        setData(result.datos)

      }
      catch(error) {
          console.log (error)
      }
    }
    fetchData()

    const loginStorage = localStorage.getItem ("isLoged");
    loginStorage && setIsLoged (true);
  }, [])

  return (
    <>
      <NavigationBar isLoged={isLoged} setIsLoged={setIsLoged} />

      <Container fluid className='desktop'>

        <Routes>
          <Route path="" element={<Cards data={data} />}  />
          <Route path="/tuexperiencia" element={<FormExp />} />
          <Route path="/ingresar" element={<Login isLoged={isLoged} setIsLoged={setIsLoged} /> } />
          <Route path="/detalle/:id" element={<Detail data={data}/>} />
        </Routes>

      </Container>
        
      <Container fluid>
      <Footer />
      </Container>
      
    </>
    )
}

export default App
