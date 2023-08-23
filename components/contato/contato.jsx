import styled from "styled-components";
import css from "./contato.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Map from "./map";

const data = {
  instagram : {
    link : "https://www.instagram.com/felipescolaa/",
    icon : faInstagram,
    nome: "Instagram",
    color : "linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)"
  },
  linkedin : {
    link : "https://www.linkedin.com/in/felipe-scola-780093234/",
    icon : faLinkedin,
    nome: "Linkedin",
    color : "linear-gradient(45deg, #0077b5, #000000, #333333)",
  },
  whatsapp : {
    link : "https://wa.me/5514997048408?text=Ol%C3%A1!!",
    icon : faWhatsapp,
    nome: "Whatsapp",
    color : "linear-gradient(45deg, #1ebea5, #00e676, #ffffff)",
  },
  github : {
    link : "https://github.com/felipinhoscola",
    icon : faGithub,
    nome: "Github",
    color : "linear-gradient(45deg,#4078c0,#6e5494,#bd2c00,#c9510c,#6cc644,#fafafa)",
  }
};

const dataArray = Object.values(data);

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Right = styled.div`
  flex: 1;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  gap: 25px;
`;
const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  font-weight: 200;
`;
const Buttons = styled.div`
    font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Btn = styled.a`
  text-decoration: none;
  width: 15rem;
  text-align: center;
  font-size: 20px;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  background: ${(props) => props.bgColor};
  transition: transform 500ms;
  :hover{
    transform: scale(1.1);
  }
`;

const Contato = () => {
  return (
    <Section id="section-contact">
      <Container>
        <Left>
          <Title>Contate-me</Title>
          <Buttons>
            {dataArray.map((item) => (
              <Btn href={item.link} target="_blank" bgColor={item.color}>
                <FontAwesomeIcon icon={item.icon} size="xl" />
                &nbsp;{item.nome}
              </Btn>
            ))}
          </Buttons>
        </Left>
        <Right>
            <Map/>
        </Right>
      </Container>
    </Section>
  );
};

export default Contato;
