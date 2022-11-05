import { useState } from "react"

const Calculadora = () => {

  //se declaran variables
  const [total, setTotal]= useState("");
  const [mrc, setMrc]=useState("");

  //trae el valor asignado a cada tecla para agregar al total
  const handleOnClick = (e)=>{
    const num =e.target.value;
    setTotal((old)=>(old+num));
  }

  //la funcion eval toma una cadena numerica u operacion y la transforma en un resultado
  //se almacena el resultado en la variable total
  const handleIgual=()=>{
    const resultado = eval(total);
    setTotal(resultado);
  }

  //funcion del boton eliminar, elimina el ultimo dato del string
  const handleDel =()=>{
    const eliminar = total.substring(0, total.length -1);
    setTotal(eliminar);
  }

  //resetea la variable total
  const handleReset = ()=>{
    setTotal("");
  }

  // almacena los datos en la tecla mrc, suma con m+ y resta con m- al valor almacenado
  const handleMrc=(e)=>{
    if (e.target.value==="MRC") {
      setMrc(total); 
    }
    if (e.target.value==="M-") {
      const resultado = eval(mrc-total);
      setMrc(resultado);      
    }
    if (e.target.value==="M+") {
      const resultado = eval(mrc+total);
      setMrc(resultado);      
    }
  }

  return (
    <>
      <div className="container d-flex justify-content-center text-light rounded-bottom flex-column tamaño-calculadora">

      <div className="border-white border-5 bg-dark rounded-5">
        <div className="bg-warning rounded-3 mx-5 text-end p-3 mt-5"><h6>{mrc}</h6><h1>{total? total: 0}</h1> </div>

        <div className="row d-flex justify-content-center m-3">

          <div className="row mt-3">
            <div className="col-7">
              <div className="row">
                <div className="col-4 mt-1"><button className="btn btn-primary opacity-75 rounded-5 w-100 tamaño-letra" value={"MRC"} onClick={handleMrc} >MRC</button></div>
                <div className="col-4 mt-1"><button className="btn btn-primary opacity-75 rounded-5 w-100 tamaño-letra" value={"M-"} onClick={handleMrc}>M-</button></div>
                <div className="col-4 mt-1"><button className="btn btn-primary opacity-75 rounded-5 w-100 tamaño-letra" value={"M+"} onClick={handleMrc}>M+</button></div>
              </div>
            </div>
            <div className="col-5 d-flex">
              <div className="col-6 mt-1"><button className="btn btn-danger opacity-75 rounded-5 w-100">GT</button></div>
              <div className="col-6 mt-1 ms-2"><button className="btn btn-danger opacity-75 rounded-5 w-100" onClick={handleReset}>C</button></div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-7">
              <div className="row">
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={7} onClick={handleOnClick}>7</button></div>
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={8} onClick={handleOnClick}>8</button></div>
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={9} onClick={handleOnClick}>9</button></div>
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={4} onClick={handleOnClick}>4</button></div>
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={5} onClick={handleOnClick}>5</button></div>
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={6} onClick={handleOnClick}>6</button></div>
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={1} onClick={handleOnClick}>1</button></div>
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={2} onClick={handleOnClick}>2</button></div>
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={3} onClick={handleOnClick}>3</button></div>
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={0} onClick={handleOnClick}>0</button></div>
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={"00"} onClick={handleOnClick}>00</button></div>
                <div className="col-4 mt-1"><button className="btn btn-light rounded-5 w-100" value={"."} onClick={handleOnClick}>.</button></div>
              </div>
            </div>
            <div className="col-5 d-flex">
              <div className="col-6">
              <div className="col-12 mt-1"><button className="btn btn-secondary rounded-5 w-100" value={"%"} onClick={handleOnClick}>%</button></div>
              <div className="col-12 mt-1"><button className="btn btn-secondary rounded-5 w-100" value={"*"} onClick={handleOnClick}>X</button></div>
                <div className="col-12  h-50 w-100 d-flex justify-content-center align-items-center py-1">
                  <button className="btn btn-secondary h-100 w-75" value={"+"} onClick={handleOnClick}>+</button>
                    
                </div>
              </div>
              <div className="col-6">
                <div className="col-12 mt-1 ms-1"><button className="btn btn-secondary rounded-5 w-100" onClick={handleDel}>Del</button></div>
                <div className="col-12 mt-1 ms-1"><button className="btn btn-secondary rounded-5 w-100" value={"/"} onClick={handleOnClick}>/</button></div>
                <div className="col-12 mt-1 ms-1"><button className="btn btn-secondary rounded-5 w-100" value={"-"} onClick={handleOnClick}>-</button></div>
                <div className="col-12 mt-1 ms-1"><button className="btn btn-secondary rounded-5 w-100" onClick={handleIgual}>=</button></div>
              </div>
              
              
            </div>
          </div>
          


          
        </div>
        </div>
      </div>
    </>
    
  )
}

export default Calculadora