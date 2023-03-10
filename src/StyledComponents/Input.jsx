import React, { useState } from 'react'
import styled from 'styled-components'

function Input() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const alertData = (name, price) => {
    console.log(name)
    name === '' && price === ''
        ? alert("이름과 가격을 입력하세요")
        : alert(`{ name: ${name}, price: ${price} }`);
  }

  return (
    <>
    <InputTitle>Input</InputTitle>
    <InputForm>
    <Form>
      <Title>이름</Title>
      <Inputs type='text' value={name} onChange={(e)=>{
        setName(e.target.value)
      }}/>
    </Form>
    <Form>
      <Title>가격</Title>
      <Inputs type ='text' onChange={(e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');   // 숫자가 아니면 공백
        e.target.value = e.target.value.replace(/,/g, '');          // ,값 공백처리
        e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); //  3자리 수마다 콤마 , 
        setPrice(e.target.value);
      }} />
    </Form>
    <GreenStyledBtn onClick={() =>alertData(name, price)}>저장</GreenStyledBtn>
    </InputForm>
    </>
    
  )
}

export default Input

const InputTitle =styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`
const InputForm =styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

const Form = styled.div`
  display: block;
`

const Inputs =styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`
const Title =styled.label`
  cursor: default;

`
const GreenStyledBtn = styled.button`
    cursor: pointer;
    border : none;
    border-radius: 8px;
    color : ${(p)=>{return p.fc}};
    background-color: rgb(85, 239, 196);
    width: 100px;
    height: 40px;
`