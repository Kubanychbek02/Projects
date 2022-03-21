import styled from 'styled-components';

export const Form = styled.div`
    display: flex;

    @media (max-width: 900px) {
        display: block;
    }
`;

export const Title = styled.h1`
    margin-left: 70px;
    width: 563px;
    height: 58px;
    left: 147px;
    top: 179px;

    font-family: 'Apercu Arabic Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 130%;
    color: #3E3E3E;

    @media (max-width: 700px) {
        margin-left: 20px;
    }
`;

export const Forms = styled.form`
    display: block;
    margin-left: 70px;
    max-width: 50%;

    @media (max-width: 700px) {
        margin-left: 20px;
    }
`;

export const Input = styled.input`
    padding-left: 30px;
    margin-bottom: 20px;
    width: 557px;
    height: 70px;
    left: 150px;
    top: 267px;

    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;
`;

export const InputText = styled.input`
    padding-left: 30px;
    margin-bottom: 30px;
    width: 557px;
    height: 100px;
    left: 150px;
    top: 469px;

    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;
`;

export const Button = styled.button`
    margin-bottom: 30px;
    border: none;
    width: 218px;
    height: 73px;
    left: 150px;
    top: 681px;
    background: #FAD34F;
    border-radius: 500px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
`;

export const Map = styled.img`
 height: 800px
 position: relative;
 z-index: 1;

 @media (max-width: 900px) {
    display: none;
 }
`;

export const MapFull = styled.img`
    display: none;

    @media (max-width: 900px) {
        display: block;
        object-fit: cover;
    }
`;

export const Smile3 = styled.svg`
    // position: absolute;
    margin-top: -500px;
    z-index: 4;
`;

export const Smile4 = styled.svg`
    // position: absolute;
    margin-top: -400px;
    z-index: 2;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const Footer = styled.div`
    height: 140px;
    display: flex;
    justify-content: space-between;
`;

export const Contacts = styled.div`
    display: flex;
    align-items: center;
`;

export const Smile6 = styled.svg`
    margin-bottom: -100px;

    @media (max-width: 600px) {
        margin-right: -100px;
    }
`;

export const Smile5 = styled.svg`
    @media (max-width: 550px) {
        margin-right: -50px;
    }
`