import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';


function App() {

  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardaResultado] = useState({});

  useEffect(()=>{
    //prevenir ejecucion primera vez
    if(ciudad === '') return;

    const consultarAPI = async ()=>{
      const appID='bf35dd2f96229c44a5203ef2e283288e';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
  
      //consultar la url
  
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardaResultado(resultado);
    }

    consultarAPI();
  },[ciudad, pais]);

  const datosConsulta = datos => {
    // Validad que ambos campos esten
    if(datos.ciudad === '' || datos.pais === ''){
      // un error
      guardarError(true)
      return;
    }
    //Ciudad  pais existen agregar al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);

  }

  //Cargar un componente condicionalmente
  let componente;
  if(error){
    //Hay un error, mostrarlo
    componente = <Error
      mensaje = 'Ambos campos con obligatorios'
    />
  }else if(resultado.cod==='404'){
      componente =<Error mensaje='La ciudad no existe en el pais'/>
  }else{
    //Mostrar el clima
    componente = <Clima 
                  resultado={resultado}
                />
  }

  return ( 
    <div className="app">
      <Header 
        title ="Clima React APP"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                datosConsulta={datosConsulta}
              />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
 
export default App;