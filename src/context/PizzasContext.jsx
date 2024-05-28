import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext()

// creacion del componente
const PizzaProvider = ({children})=>{
    const [pizzas, setPizzas]=useState([])
    const [carrito, setCarrito]=useState([])
   
    // llamar al api
    const getDatos = async()=>{
        const datos =await fetch('./pizzas.json')
        const losDatos = await datos.json()
        setPizzas(losDatos)
        // console.log(losDatos)
    }
    // funcion que se va encargar deactualizar el carrito de compras SetCarrito usamos destructuring para desglozar los datos
    // usamos un findIndex
    const addCarrito = ({id,price,name,img})=>{
        const pEncontradoIndex = carrito.findIndex((p)=>p.id == id)
        // si es -1 debo agregar un nuevo producto a mi carrito si no yo debo sumar un nuevo producto a mi carrito
        // crear un producto
        // ademas agragamos una propiedad contador:1
        const producto = {id,price,name,img,count:1}
        // creamos un if si el articulo no ha sido encontrado 
        // debo sumar al producto que ya existe
        // de lo contrario debo agregarese producto ...copiolo que ya tengo y le agrego las propiedade
        if(pEncontradoIndex>=0){
            carrito[pEncontradoIndex].count++
            setCarrito([...carrito])
        }else{
            setCarrito([...carrito,producto])
        }
        console.log(carrito)

    }
    const sumaTotal = carrito.reduce((acumulador,valorActual)=>acumulador + (valorActual.price * valorActual.count),0)
    const incrementador=(index)=>{
        carrito[index].count++
        setCarrito([...carrito])
        
    }
    const decrementador=(index)=>{
        carrito[index].count--
        setCarrito([...carrito])
    
        if(carrito[index].count === 0){
            setCarrito([])
        }
        
        
    }
    useEffect(()=>{
        getDatos()
    },[])
    return(
        <PizzaContext.Provider value={{pizzas, setPizzas, carrito, addCarrito, sumaTotal, incrementador, decrementador}}>
            {children}
        </PizzaContext.Provider>
    )
}
export default PizzaProvider