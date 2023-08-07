import { Inter } from 'next/font/google'
import Sobre from '@/components/sobre_mim/sobre'
import Experiencias from '@/components/experiencias/experiencias'
import Projetos from '@/components/projetos/projetos'
import Contato from '@/components/contato/contato'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

const Container = styled.div`
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
  background-size: 100%;
`;

export default function Home() {
  return (
    <Container>
      <Sobre />
      <Experiencias />
      <Projetos />
      <Contato />
    </Container>
  )
}
