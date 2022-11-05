/*Fetch

import { useEffect, useState } from "react";

const ApiPokemon = () => {

  //se declaran las variables que se van a guardar con info de la api

  const [url, setUrl]=useState("")
  const [data, setData] = useState([]);
  const [previous, setPrevious] = useState([]);
  const [next, setNext] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [statPokemon, setStatPokemon]= useState([]);


  //se lee la informacion de la api y se almacena en las variables
  useEffect(()=>{
      setLoading(true);
      fetch(url || "https://pokeapi.co/api/v2/pokemon/")
          .then((datos)=>datos.json())
          .then((res)=>setData(res.results) & setNext(res.next) & setPrevious(res.previous))
          .catch((e)=>setError("error: "+e))
          .finally(()=>setLoading(false))
  },[url]);


  //se reincia el array para cuando se vuelva a cargar los datos
  //ciclo que lleva los datos de cada card a la funcion pokemon para almacenarlos
  useEffect(()=>{
    setStatPokemon([]);
    data.map((item)=>{
      //console.log(statPokemon);
        pokemon(item.url);          
    })
  },[data]);



  //valida si el array es mayor a 20 para dejar de almacenar datos en el
  //en los datos del item que se trae desde el ciclo se almacena una url
  //se accede a los datos de la api y se almancenan en una variable
  const pokemon= async (url)=>{
    if (statPokemon.length>20) {
      return
    }
    const stats = await fetch(url)
                          .then((res)=>(res.json()))
                          .then((data)=>setStatPokemon((old)=>([...old, data]))) 
                        }



  //valida y muestra un mensaje si no han cargado todavia los datos
  if (loading) {
    return <h4>Loadding...</h4>    
  }
  if (error!=="") {
    return <h4>{error}</h4>    
  } 
  
  //funcion de los botones prev y next para cambiar la url de la variable y se carguen nuevos datos
  const HandleClick= (e)=>{
    setUrl(e.target.value);
  }
  
 
  return (
    <div className="bg-dark d-flex flex-column">
      <div className="encabezado d-flex justify-content-around">
      <button className="btn btn-outline-danger m-2" value={previous} disabled={previous==null} onClick={HandleClick}>Prev</button>
        <button className="btn btn-outline-danger m-2"value={next} disabled={next==null} onClick={HandleClick}>Next</button>
      </div>
      <div className="cuerpo border-2 rounded-4 border m-4 p-1 text-bg-light d-flex row justify-content-around">
      {statPokemon?
            statPokemon.map((item)=>(
              <div className="col-lg-3 col-md-4 col-sm-6 card mt-2 bg-warning pt-2">
                  <h3 key={item.id} className="card-header" >{item.name}</h3>
                  <img className="card-img bg-black"  src={item.sprites.front_default} alt=""/>
                    <div className="card-body bg-secondary text-light">
                        <h6>{item.stats[0].stat.name}: {item.stats[0].base_stat}</h6>
                        <h6>{item.stats[1].stat.name}: {item.stats[1].base_stat}</h6>
                        <h6>{item.stats[2].stat.name}: {item.stats[2].base_stat}</h6>
                        <h6>{item.stats[3].stat.name}: {item.stats[3].base_stat}</h6>
                        <h6>{item.stats[4].stat.name}: {item.stats[4].base_stat}</h6>
                        <h6>{item.stats[5].stat.name}: {item.stats[5].base_stat}</h6>
                        <h6>Type : {item.types[0].type.name}{item.types[1]? "/"+ item.types[1].type.name:""}</h6>                        
                    </div>
          </div> 
            ))
      :<h4>Loadding...</h4> }


      </div>
    </div>
  )
}

export default ApiPokemon*/


//Axios

import { useEffect, useState } from "react";
import axios from "axios";

const ApiPokemon = () => {

  //se declaran las variables que se van a guardar con info de la api

  const [url, setUrl]=useState("")
  const [data, setData] = useState([]);
  const [previous, setPrevious] = useState([]);
  const [next, setNext] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [statPokemon, setStatPokemon]= useState([]);


  //se lee la informacion de la api y se almacena en las variables
  useEffect(()=>{
    setLoading(true)
    axios.get(url || "https://pokeapi.co/api/v2/pokemon/")
    .then((res)=>setData(res.data.results) & setNext(res.data.next) & setPrevious(res.data.previous))
    .catch(e=>setError("Error: "+e))
    .finally(()=>setLoading(false))
  },[url]);


  //se reincia el array para cuando se vuelva a cargar los datos
  //ciclo que lleva los datos de cada card a la funcion pokemon para almacenarlos
  useEffect(()=>{
    setStatPokemon([]);
    data.map((item)=>{
      //console.log(statPokemon);
        pokemon(item.url);          
    })
  },[data]);



  //valida si el array es mayor a 20 para dejar de almacenar datos en el
  //en los datos del item que se trae desde el ciclo se almacena una url
  //se accede a los datos de la api y se almancenan en una variable
  const pokemon= async (url)=>{
    if (statPokemon.length>20) {
      return
    }
    const stats = await axios.get(url)
                          .then((res)=>res.data)
                          .then((data)=>setStatPokemon((old)=>([...old, data]))) 
                        }



  //valida y muestra un mensaje si no han cargado todavia los datos
  if (loading) {
    return <h4>Loadding...</h4>    
  }
  if (error!=="") {
    return <h4>{error}</h4>    
  } 
  
  //funcion de los botones prev y next para cambiar la url de la variable y se carguen nuevos datos
  const HandleClick= (e)=>{
    setUrl(e.target.value);
  }
  
 
  return (
    <div className="bg-dark d-flex flex-column">
      <div className="encabezado d-flex justify-content-around">
      <button className="btn btn-outline-danger m-2" value={previous} disabled={previous==null} onClick={HandleClick}>Prev</button>
        <button className="btn btn-outline-danger m-2"value={next} disabled={next==null} onClick={HandleClick}>Next</button>
      </div>
      <div className="cuerpo border-2 rounded-4 border m-4 p-1 text-bg-light d-flex row justify-content-around">
      {statPokemon?
            statPokemon.map((item)=>(
              <div className="col-lg-3 col-md-4 col-sm-6 card mt-2 bg-warning pt-2">
                  <h3 key={item.id} className="card-header" >{item.name}</h3>
                  <img className="card-img bg-black"  src={item.sprites.front_default} alt=""/>
                    <div className="card-body bg-secondary text-light">
                        <h6>{item.stats[0].stat.name}: {item.stats[0].base_stat}</h6>
                        <h6>{item.stats[1].stat.name}: {item.stats[1].base_stat}</h6>
                        <h6>{item.stats[2].stat.name}: {item.stats[2].base_stat}</h6>
                        <h6>{item.stats[3].stat.name}: {item.stats[3].base_stat}</h6>
                        <h6>{item.stats[4].stat.name}: {item.stats[4].base_stat}</h6>
                        <h6>{item.stats[5].stat.name}: {item.stats[5].base_stat}</h6>
                        <h6>Type : {item.types[0].type.name}{item.types[1]? "/"+ item.types[1].type.name:""}</h6>                        
                    </div>
          </div> 
            ))
      :<h4>Loadding...</h4> }


      </div>
    </div>
  )
}

export default ApiPokemon