import styled from 'styled-components';

export const ContainerDriverCard = styled.div`
  display: flex;
  background-color: #425cbb;
  border-radius: 10px;
  color: #fff;
  padding: 15px;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  margin: 10px;
  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 100px;
  }
  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .column{
      display:flex;
      flex-direction:column
  }
`;
