import React from "react";
import styled from "styled-components";


const BucketListss = ({ list }) => {
  const my_wrap = React.useRef(null);

  return (
    <div ref={my_wrap}>
      <Title>💕 남의 버킷리스트 💕</Title>
      <hr></hr>
      <Content>
        {
          list.map((list, index) => {
            return <Part key={index}>{list}</Part>;
          })
        }
      </Content>
    </div>          
  );
};


const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Part = styled.div`
  margin-top: 15px;
  background-color: #b7cadb;
  padding: 10px;
  width: 200px;
  text-align: center;
  border-radius: 5px;
  color: #395b64;
  font-weight: bolder;
`;

const Title = styled.h1`
  color: #789395;
  text-align: center;
  font-size: 20px;
`;


export default BucketListss;
