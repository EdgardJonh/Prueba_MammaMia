import { useContext } from 'react';
import { PizzaContext } from '../context/PizzasContext';
const Carrito = () => {
    const {carrito, sumaTotal, incrementador, decrementador}=useContext(PizzaContext)
    // Acumulador para sumar eltotal
    
    // console.log(carrito)
  return (
    <div className="d-flex justify-content-center">
      <div className="container m-5 bg-light" style={{backgroundColor:'darkgray'}}>
        <div className="row p-5">
          <p style={{marginBottom:'0px', padding:'0px'}}>Detalle del pedido:</p>
          <div className="col-12 p-3" style={{backgroundColor:'white'}}>
            {/* lista de las pizzass */}
            {carrito && 
            carrito.map((producto, index)=> (
                <div key={producto.id} className="d-flex justify-content-between border-bottom p-2 align-items-center">
                <div className="d-flex align-items-center">
                  <img src={producto.img} alt=""  style={{width:'5rem'}}/>
                  <p className="mb-0 ms-2">{producto.name}</p>
                </div>
                <div className="d-flex align-items-center">
                  
                  <button className="btn btn-danger me-1" onClick={()=>decrementador(index)}>-</button>
                  <p className="mb-0">{producto.count}</p>
                  <button className="btn btn-primary ms-1" onClick={()=>incrementador(index)}>+</button>
                  <p className='mb-0 ms-2 me-2'>=</p>
                  <p className="mb-0 me-1">${producto.count * producto.price }</p>
                </div>
              </div>
            ))
            
            }
           
            <h3>Total:${sumaTotal}</h3>
            <button className="btn btn-success">Ir a Pagar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carrito;
