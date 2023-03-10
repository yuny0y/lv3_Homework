import React from "react";
import styled, { css } from "styled-components";

const Button= ({ children, ...kinds}) =>{
    return <StyleButton kinds={Object.keys(kinds)[0]} 
            onClick = {kinds.onClick}>{children}</StyleButton>
}

const StyleButton = styled.button`
    border-radius: 8px;
    width: 200px;
    height: 50px;
    border: 3px solid rgb(85, 239, 196);
    background-color: transparent;
    ${({kinds}) => {
    switch (kinds) {
      case 'MintLarge':
        return css`
          cursor : pointer;
          font-Weight : bold;
        `
      case 'MintMedium':
        return css`
          cursor : pointer;
          background-color: rgb(85, 239, 196);
          width : 130px;
          height: 45px;
          border : none;
          &:hover {
            background-color: rgb(28, 109, 86);
          }
        `
      case 'MintSmall':
        return css`
          cursor : pointer;
          background-color: rgb(85, 239, 196);
          width : 100px;
          height: 40px;
          border : none;
          &:hover {
            background-color: rgb(28, 109, 86);
          }
        `
      case 'PeachLarge':
        return css`
          cursor : pointer;
          font-Weight : bold;
          color : rgb(214, 48, 49);
          border : 3px solid rgb(250, 177, 160);
        `
      case 'PeachMedium':
        return css`
          cursor : pointer;
          background-color: rgb(250, 177, 160);
          border : none;
          width : 130px;
          height: 45px;
          color : rgb(214, 48, 49);
          &:hover : {
            background-color: rgb(112, 19, 19);
          }
        `
      case 'PeachSmall':
        return css`
          cursor : pointer;
          background-color: rgb(250, 177, 160);
          border : none;
          width : 100px;
          height: 40px;
          color : rgb(214, 48, 49);
          &:hover{
            background-color: rgb(112, 19, 19);
          }
        `
        default : 
    }
  }}
`
export default Button