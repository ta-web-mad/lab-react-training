import styled from 'styled-components';

export const ContainerBoxColor = styled.div`
  display: flex;
  border: 1px;
  border-style: solid;
  border-color: black;
  padding: 5px;
  margin: 10px 0;
  background-color: ${(props) => `rgb(${props.r},${props.g},${props.b})`};
`;
