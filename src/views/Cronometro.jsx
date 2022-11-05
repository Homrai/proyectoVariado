import { useEffect } from "react";
import { useState } from "react";

const Cronometro = () => {

//variables medida de tiempo
  const [segundos, setSegundos]=useState(0);
  const [minutos, setMinutos]=useState(0);
  const [horas, setHoras]=useState(0);
  const [micro, setMicro]=useState(0);

//variable para validar la funcion setInterval
  const [validar, setValidar]=useState(0);

//variables para validar los botones
  const [empezar, setEmpezar]=useState(false);
  const [pausar, setPausar]= useState(true);
  


//se ejecuta al usar los botones
  useEffect(()=>{
//se valida que la variable "validar" tenga algo guardado, si no esta vacio se detiene el setInterval y retorna
    if (validar) {
      clearInterval(validar);
      setValidar(0);
      return; 
    }
//se validan las variables de los botones para ejecutar el setInterval y aumentar la variable micro
    if (empezar && pausar===false) {
//se crea constante new validar para poder limpiar despues setInterval
        const newValidar = setInterval(()=>{
          setMicro((micro)=>micro+1);
        },10);
//se envia el valor de newValidar a setValidar para que este no este vacio y se pueda ejecutar y limpiar al comienzo del useeffect 
        setValidar(newValidar);         
      }   
    },[empezar],[pausar]);
    
//se agrega valor a las variables numericas por verificaciones de cantidad cada vez que la variable micro cambie
    useEffect(()=>{
      if (micro>=100) {
        setSegundos((segundos)=>segundos+1);
        setMicro(0);      
      }
      if (segundos>=60) {
        setMinutos((minutos)=>minutos+1);  
        setSegundos(0);   
      }
      if (minutos>=60) {
        setHoras((horas)=>horas+1);
        setMinutos(0);    
      }
    },[micro]);



//funciones de los botones
  const play= ()=>{
    setEmpezar(true);
    setPausar(false);
  }
  const pausa = ()=>{
    setEmpezar(false);
    setPausar(true);
  }
//se detiene el proceso y se reinician las variables
  const stop = ()=>{
    setEmpezar(false);
    setMicro(0);
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
  }
//se valida que los numeros sean menores a 9 para agregar un cero al comienzo y se vea mas estetico el programa
//retorna el numero menor a 9 con un cero a la izq o el numero de dos digitos
  const medida = (dato)=>{
    if (dato<=9) {
      return "0"+ dato      
    }else{
      return dato
    }
  }


  return (

      <div className="bg-black d-flex justify-content-sm-start flex-sm-row flex-column-reverse py-3">
        <div className="col-2 pt-5">
          <h1 className="mt-1 mx-5 text-center text-light  vertical-text">Cronometro</h1>
        </div>
        <div className="col-sm-9 bg-light rounded-3 d-flex">
          <div className="Fondo-cronometro d-flex flex-column-reverse w-100 justify-content-center">
{/* botones */}
            <div className="my-2 d-flex justify-content-center">
                <button className="btn btn-outline-dark m-lg-2 mx-sm-1" onClick={play}>▶</button>
                <button className="btn btn-outline-dark m-lg-2  mx-sm-1" onClick={pausa}>⏸</button>
                <button className="btn btn-outline-dark m-lg-2  mx-sm-1" onClick={stop}>⏹</button>
            </div>
{/* temporizador */}
            <div className="d-flex bg-black text-light justify-content-center align-items-end digital rounded-3 margen w-50">
              <div className="col-2 text-center"><h2>{medida(horas)}</h2></div>
              <div className="col-1 text-end"><h2>:</h2></div>
              <div className="col-2 text-center"><h2>{medida(minutos)}</h2></div>
              <div className="col-1 text-end"><h2>:</h2></div>
              <div className="col-2 text-center"><h2>{medida(segundos)} </h2></div>
              <div className="col-1 text-end"><h2>.</h2></div>
              <div className="col-2 text-center"><h4>{medida(micro)}</h4></div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Cronometro