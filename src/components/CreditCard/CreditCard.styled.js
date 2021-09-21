import styled from "styled-components";

export const ContainerCard = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${(props) => `#${props.bgColor}`};
    color: ${(props) => `${props.color}`}
`
export const Card = styled.div`
    background-color: ${(props) => `"#${props.bgColor.toString(16)}"`};
    padding: 5px 15px 5px 15px;
    img{
        position: relative;
        width: 50px;
        rigth: 5px;
    }
    p{
        color: ${(props) => `${props.color}`};
    }
`