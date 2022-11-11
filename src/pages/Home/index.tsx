import react, {useState}  from 'react'
import styled from "styled-components"

import { 
  Container, 
  Title, 
  InputFile, 
  TitleSpan, 
  TitleSpan2, 
  SubTitle, 
  FormSubmit, 
  ButtonSubmit
  } from "./styles"

import Logo from '../../assets/images/logo.png'

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../config/firebase';

function Home() {
    
  const [imgURL, setImgURL] = useState("");
  const [progressPorcent, setPorgessPorcent] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        window.alert('Arquivo enviado com sucesso')
      },
      (error) => {
        alert(error);
        window.alert('Ops, tente enviar novamente')
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      }
    );
  };

  return (
    <Container>
      <img src={Logo} style={{ width: '20%' }} />
      <Title>SELECIONE O <TitleSpan>ARQUIVO</TitleSpan> PARA CONSUMO</Title>
      <SubTitle><TitleSpan2>1.</TitleSpan2> Faça upload do arquivo</SubTitle>
      <SubTitle><TitleSpan2>2.</TitleSpan2> Aguarde a análise dos seus dados</SubTitle>
      <FormSubmit onSubmit={handleSubmit} >
        <InputFile type={"file"} accept={".csv"}></InputFile>
        <ButtonSubmit type="submit" value="ENVIAR" />
      </FormSubmit>
    </Container>
  )
}

export default Home