import styled from 'styled-components';

export const ContainerCreditCard = styled.div`
  margin: 10px;
  padding: 20px;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => `${props.bgColor}`};
  color: ${(props) => `${props.color}`};

  img {
    width: 50px;
    margin-top: 10px;
    margin-right: 10px;
    text-align: right;
  }
`;
