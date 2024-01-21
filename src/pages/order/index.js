import React, { useRef, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import axios from "axios"

import Burger from '../../assets/burger .png'
import Trash from '../../assets/trash.svg'


import { Container, Image, Order } from "./styles"
import H1 from "../../components/title"
import Button from "../../components/button"
import P from "../../components/paragraph"

const App = () => {
  const history = useHistory();
  
  const [orders, setOrders] = useState([]);
  const inputName = useRef();
  const inputOrder = useRef();

  
  useEffect(() => {
  async function fetchOrders() {
    const { data: newOrder } = await axios.get("http://localhost:3001/order");

    setOrders(newOrder);
  }
  fetchOrders()
},[])

  async function deleteOrder(orderId) {

    await axios.delete(`http://localhost:3001/order/${orderId}`)

    const newOrders = orders.filter(order => order.id !== orderId)

    setOrders(newOrders)
  }

  function goPage(){
    history.push("/")
  }




  return (
    <Container>
      <Image alt="logo-imagem" src={Burger} />
      <H1>Pedidos</H1>

             <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <div>
                <P>{order.order} </P>
                <P isName={true}>{order.clientName}</P>
              </div>
              <button onClick={() => deleteOrder(order.id)}> <img alt="lata-de-lixo" src={Trash} /> </button>
            </Order>
          ))
          }
        </ul>
        <Button onClick={goPage}>Voltar</Button>
     

    </Container>
  )
}

export default App