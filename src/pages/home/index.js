import React, { useRef, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import axios from "axios"

import CodeBurger from '../../assets/codeburger.png'


import { Container, Image, ContainerItens, InputLabel, Input } from "./styles"
import H1 from "../../components/title"
import Button from "../../components/button"

const App = () => {
  const history = useHistory();

  const [orders, setOrders] = useState([]);
  const inputName = useRef();
  const inputOrder = useRef();


  function validateOrder(inputName, inputOrder) {
    if (inputName.current.value === "" || !inputOrder.current.value === "") {
      return false
    }
    return true
  }

  async function addNewOrder() {

    const validate = validateOrder(inputName, inputOrder);
    if (!validate) {
      alert("Faça seu pedido para continuar");
      return;
    }
    const { data: newOrder } = await axios.post("http://localhost:3001/order", { order: inputOrder.current.value, clientName: inputName.current.value })


    setOrders([...orders, newOrder])

    history.push('/order')

  }

  return (
    <Container>
      <Image alt="logo-imagem" src={CodeBurger} />
      <H1>Faça seu pedido!</H1>

      <ContainerItens>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Faça aqui seu pedido" />

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <Button isRed = {true} onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>

    </Container>
  )
}

export default App