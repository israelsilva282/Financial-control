import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
border-radius: 5px;
padding: 5px 15px;
width: 30%;
box-shadow: 0 0 0 2px purple;


@media (max-width: 750px){
    width: 20%;

    p{
        font-size: 12px;
    }

    span{
        font-size: 20px;
    }

    svg{
        display: none;
    }

}
`;

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
gap: 10px;

`;

export const HeaderTitle = styled.p`
font-size: 20px;
`;

export const Total = styled.span`
font-size: 30px;
font-weight: bold;
`;
