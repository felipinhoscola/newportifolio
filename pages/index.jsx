import { Inter } from 'next/font/google'
import Sobre from '@/components/sobre_mim/sobre'
import Habilidades from '@/components/habilidades/habilidades'
import Projetos from '@/components/projetos/projetos'
import Contato from '@/components/contato/contato'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

const Container = styled.div`
  z-index: -99;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar{
    display:none;
  }
  background: url("./images/bg.jpg");  
  background-size: 100% !important;
 
  @media only screen and (max-width: 768px){
    /* background: rgb(171,59,246);
    background: linear-gradient(90deg, rgba(171,59,246,1) 0%, rgba(56,2,116,1) 50%, rgba(26,1,50,1) 100%);   */
    background-size: 800px 900px !important;
  }
`;

export default function Home() {
  return (
    <Container>
      <Sobre/>
      <Habilidades />
      <Projetos />
      <Contato />
    </Container>
  )
}
