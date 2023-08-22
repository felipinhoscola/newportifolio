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
const BtnInsta = styled.a`
  width: 15rem;
  text-align: center;
  font-size: 20px;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
  transition: transform 500ms;
  :hover{
    transform: scale(1.1);
  }   
`;
const BtnLinkedin = styled.a`
  width: 15rem;
  text-align: center;
  font-size: 20px;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  background: linear-gradient(45deg, #0077b5, #000000, #333333);
  transition: transform 500ms;
  :hover{
    transform: scale(1.1);
  } 
`;

const BtnWpp = styled.a`
  width: 15rem;
  text-align: center;
  font-size: 20px;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  background: linear-gradient(45deg, #1ebea5, #00e676, #ffffff);
  transition: transform 500ms;
  :hover{
    transform: scale(1.1);
  } 
`;
const BtnGithub = styled.a`
  width: 15rem;
  text-align: center;
  font-size: 20px;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  background: linear-gradient(
    45deg,
    #4078c0,
    #6e5494,
    #bd2c00,
    #c9510c,
    #6cc644,
    #fafafa
  );
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
            <BtnInsta href="https://www.instagram.com/felipescolaa/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
              &nbsp;Instagram
            </BtnInsta>
            <BtnLinkedin href="https://www.linkedin.com/in/felipe-scola-780093234/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
              &nbsp;Linkedin
            </BtnLinkedin>
            <BtnWpp href="https://wa.me/5514997048408?text=Ol%C3%A1!!" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} size="xl" />
              &nbsp;Whatsapp
            </BtnWpp>
            <BtnGithub href="https://github.com/felipinhoscola" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="xl" />
              &nbsp;Github
            </BtnGithub>
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
