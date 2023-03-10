import React, { useState } from 'react'
import styled from 'styled-components';

function Select() {
  const [open,setOpen] =useState(false);
  const [openSecond,setOpenSecond] = useState(false);
  return (
    <Wrap>
      <h1>Select</h1>
      <WrapBtn>
        <FirstBtn>
          <BtnForm onClick={() => {setOpen((prev)=>!prev);}}>
            <div>자바</div>
            <div>▼</div>
          </BtnForm>
          <List display={open}>
            <p>리액트</p>
            <p>자바</p>
            <p>스프링</p>
            <p>리액트네이티브</p>
          </List>
        </FirstBtn>
        <SecondBtn>
          <BtnForm onClick={() => {setOpenSecond((prev)=>!prev);}}>
            <div>자바</div>
            <div>▼</div>
          </BtnForm>
          <List display ={openSecond}>
            <p>리액트</p>
            <p>자바</p>
            <p>스프링</p>
            <p>리액트네이티브</p>
          </List>
        </SecondBtn>
      </WrapBtn>
    </Wrap>
  );
}

export default Select

const Wrap = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  position: relative;
  margin-top: 50px;
  overflow: visible;
`
const BtnForm = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
`
const WrapBtn = styled.div`
  display: flex;
  gap: 10px;
  height: 62px;
  overflow: visible;
`
const FirstBtn = styled.div`
  display: flex;
  flex-direction: column;
  overflow: visible;
  height: fit-content;
`
const SecondBtn = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const List = styled.ul`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  height: 170px;
  background-color: white;
  display: ${(props)=>props.display ? 'block' : 'none'};
`