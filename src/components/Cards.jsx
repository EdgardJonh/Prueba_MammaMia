import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { PizzaContext } from '../context/PizzasContext';
const Cards = ({laspizzas}) => {
  const {addCarrito}=useContext(PizzaContext)
  const navigate = useNavigate()
  const listaitem = laspizzas.ingredients.map((item,index)=>{return <li key={index} style={{listStyle:'none'}}>🍕{item}</li>})
  
  return (
    <>
      <div className="card m-2 p-0" style={{ width: "15rem" }}>
        <img src={laspizzas.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title border-bottom">{laspizzas.name}</h5>
          <p
            className="card-text"
            style={{ fontWeight: "600", fontSize: "small" }}
          >
            Ingredientes:
          </p>
         <ul>
          {listaitem}
         </ul>
          
        </div>
        <div className="border-top p-3 text-center">
          <p>${laspizzas.price}</p>
          <button className="btn btn-warning me-1" onClick={()=>navigate(`/Pizza/${laspizzas.id}`)}>Ver Mas👀</button>
         {/* me llevo la pizza completa  */}
          <button className="btn btn-success ms-1" onClick={()=>addCarrito(laspizzas)}>Anadir🛒</button>
        </div>
      </div>
    </>
  );
};
export default Cards;
