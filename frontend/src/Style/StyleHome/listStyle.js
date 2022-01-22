import { createGlobalStyle } from "styled-components";

export const ListStyle = createGlobalStyle`
.list {
    width: 100%;
    margin-top: 10px;
  
    .listTitle {
      color: white;
      font-size: 20px;
      font-weight: 500;
      margin-left: 50px;
    }
 
    .wrapper {
      position: relative;
   
      .sliderArrow {
        width: 50px;
        height: 100%;
        background-color: black;
        color: white;
        position: absolute;
        z-index: 99;
        top: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;
  
        &.left {
          left: 0;
        }
  
        &.right {
          right: 0;
        }
      }
      .container {
        margin-left: 50px;
        display: flex;
        margin-top: 10px;
        width: max-content;
        transform: translateX(0px);
        transition: all 1s ease;
      }
    }
  }
`;
