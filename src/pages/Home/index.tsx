import react from 'react'
import styled from "styled-components"

import { Container, Title, InputFile, TitleSpan, TitleSpan2, SubTitle} from "./styles"

import Logo from './logo.png'

import { getStorage, ref, uploadBytes } from "firebase/storage";

function Home() {
  // Create a root reference
  const storage = getStorage();

  // Create a reference to 'mountains.jpg'
  const mountainsRef = ref(storage, 'mountains.jpg');

  // Create a reference to 'images/mountains.jpg'
  const mountainImagesRef = ref(storage, 'images/mountains.jpg');

  // While the file names are the same, the references point to different files
  mountainsRef.name === mountainImagesRef.name;           // true
  mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 


  const handleSubmit = (event) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];


    const storage = getStorage();
    const storageRef = ref(storage, 'some-child');

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    }


  return (
    <Container>
      <img src={Logo} style={{ width: '20%' }} />
      <Title>SELECIONE O <TitleSpan>ARQUIVO</TitleSpan> PARA CONSUMO</Title>
      <SubTitle><TitleSpan2>1.</TitleSpan2> Faça upload do arquivo</SubTitle>
      <SubTitle><TitleSpan2>2.</TitleSpan2> Aguarde a análise dos seus dados</SubTitle>
      <form onSubmit={handleSubmit} >
        <InputFile type={"file"} accept={".csv"} ></InputFile>
        <input type="submit" value="" />
      </form>
      
    </Container>
  )
}

export default Home