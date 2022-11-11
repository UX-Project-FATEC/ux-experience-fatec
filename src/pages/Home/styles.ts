import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Image = styled.img`

`;

export const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    color: #717276;
`;

export const SubTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #717276;
`;

export const TitleSpan = styled.span`
    color: #51A7B1;
`;

export const TitleSpan2 = styled.div`
    display: inline;
    color: #51A7B1;
    border-radius: 100px;
`;

export const FormSubmit = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputFile = styled.input`
    font-family: 'Montserrat', sans-serif;
    color: #51A7B1;
    font-weight: 700;
`;

export const ButtonSubmit = styled.input`
    margin-top: 10%;
    font-family: 'Montserrat', sans-serif;
    background: #51A7B1;
    font-weight: 700;
    border: 1px solid #51A7B1;
    width: 270px;
    height: 38px;
    border-radius: 3px;
    color: white;
    font-size: 18px;
`;


