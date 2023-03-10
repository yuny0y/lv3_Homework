import React from 'react'
import styled from 'styled-components'
import Input from './StyledComponents/Input'
import Modal from './StyledComponents/Modal'
import Select from './StyledComponents/Select'
import Button from './StyledComponents/Button'
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";



function App() {
  return (
    <>
     <Form>
     <h1>Button</h1>
     <BtnWrap>
      <Button MintLarge onClick={()=>{alert('버튼을 만들어보세요')}}>Large Prime Button <AiFillCaretRight/></Button>
      <Button MintMedium>medium</Button>
      <Button MintSmall>small</Button>
     </BtnWrap>
     <BtnWrap>
      <Button PeachLarge onClick={()=>{prompt('어렵나요?')}}>Large Prime Button <AiFillApple/></Button>
      <Button PeachMedium>medium</Button>
      <Button PeachSmall>small</Button>
     </BtnWrap>
      <Input/>
      <Modal/>
      <Select/>
      </Form>
    </>
  )
}

export default App

const Form =styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`
const BtnWrap = styled.div`
    display: flex;
    flex-direction: row;
    gap : 10px;
`
