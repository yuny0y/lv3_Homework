import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

function Modal() {
  const [modalFirst, setModalFirst] = useState(false);
  const [modalSecond, setModalSecond] = useState(false);

  return (
    <Wrap>
      <h1>Modal</h1>
      <WrapBtn>
        <Button MintSmall onClick={() => {setModalFirst(true);}}>
            open modal</Button>
          {modalFirst ? (
          <ModalLayout>
            <ModalContent>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
              않아요.
            <ModalBtn>
              <Button PeachSmall onClick={() => {setModalFirst(false);}}>
                닫기</Button>
              <Button MintSmall>확인</Button>
            </ModalBtn>
          </ModalContent>
          </ModalLayout>
          ) : null}


          <Button PeachLarge onClick={() => {setModalSecond(true);}}>
            open modal </Button>
          {modalSecond ? (
            <ModalLayout>
              <ModalSecondContent>
                <div display='block'>
                  닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                않아요.
                </div>
                <CloseBtnForm>
                  <ModalCloseBtn onClick={() => {setModalSecond(false);}}>
                  X</ModalCloseBtn>
                </CloseBtnForm>
              </ModalSecondContent>
            </ModalLayout>
          ):null}
        </WrapBtn>
    </Wrap>
  );
}

export default Modal;

const Wrap = styled.div`
  display: block;
`

const WrapBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
const ModalLayout = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
`

const ModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 300px;
`
const ModalBtn = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`
const ModalSecondContent = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 200px;
  position: absolute;
`
const ModalCloseBtn = styled.div`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  line-height: 42px
`

const CloseBtnForm = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`