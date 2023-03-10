import React from 'react'
import styled from 'styled-components'

function ModalFirst({setModalFirst}) {
  return (
  
        <ModalForm>
            <p>
            닫기와 확인 버튼 2개가 있고, 
            외부 영역을 눌러도 모달이 닫히지 않아요.
            </p>
            <ModalBtn>
            <RedStyledBtn onClick={()=> {
                setModalFirst(false);
            }}>닫기</RedStyledBtn>
            <GreenStyledBtn>확인</GreenStyledBtn>
            </ModalBtn>
        </ModalForm>

  )
}

export default ModalFirst

const GreenStyledBtn = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    width: 100px;
    height: 40px;
`

const RedStyledBtn = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 8px;
    color: rgb(214, 48, 49);
    background-color: rgb(250, 177, 160);
    width: 100px;
    height: 40px;
`

const ModalForm = styled.div`
  width: 500px;
  height: 300px;
  z-index: 999; //최상단위치
  //중앙배치
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //모달창디자인
  padding : 24px;
  background-color: white;
  border-radius: 8px;
`
const ModalBtn = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    gap: 5px
`