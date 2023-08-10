import styled from "styled-components";
import css from "./habilidades.module.scss";
import Image from "next/image";
import { useState } from "react";
import htmlIcon from "@/public/images/html-icon.png";
import jsIcon from "@/public/images/js-icon.png";
import phpIcon from "@/public/images/php-icon.png";
import cssIcon from "@/public/images/css-icon.png";

//variaveis
const data = ["Estágio", "Portifólio", "App Teste"];
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Div_principal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  gap: 25;
`;
const Div_left = styled.div`
  max-width: 25%;
`;
const Div_right = styled.div`
  max-width: 25%;
`;
const DivInvisible = styled.div`
  display: none;
`;
const Ul = styled.div`
  list-style-type: none;
  padding-left: 0;
  font-weight: bold;
  font-family: "Anton", sans-serif;
  color: #ddaebe;
  font-size: 4rem;
`;
const Topicos = styled.div`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    color: #dbc4cb;
  }
`;
const Infos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Icons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-around;
`;
const Text = styled.div`
  margin-top: 2rem;
  color: white;
  word-break: normal;
  font-size: 1.3rem;
  text-align: justify;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;
const Titulo = styled.div`
  margin-top: 2rem;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;
const Desc = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
//functions

const Habilidades = () => {
  const [work, setWork] = useState("");
  const [icon, setIcon] = useState("");
  return (
    <Section id="section_exp">
      <Div_principal>
        <Div_left>
          <Ul>
            {/* Corre o array e colocando o valor em cada lugar q chama o item */}
            {data.map((item) => (
              <li>
                <Topicos key={item} onClick={() => setWork(item)}>
                  {item}
                </Topicos>
              </li>
            ))}
          </Ul>
        </Div_left>
        <Div_right>
          {work === "Estágio" ? (
            <Infos>
              <Icons>
                <Image
                  className={css.IconsClass}
                  onClick={() => setIcon(1)}
                  src={htmlIcon}
                ></Image>
                <Image
                  className={css.IconsClass}
                  onClick={() => setIcon(2)}
                  src={cssIcon}
                ></Image>
                <Image
                  className={css.IconsClass}
                  onClick={() => setIcon(3)}
                  src={jsIcon}
                ></Image>
                <Image
                  className={css.IconsClass}
                  onClick={() => setIcon(4)}
                  src={phpIcon}
                ></Image>
                <Image
                  className={css.IconsClass}
                  onClick={() => setIcon(5)}
                  
                ></Image>
              </Icons>
              {icon === 1 ? (
                <Desc>
                  <Titulo>HTML (HyperText Markup Language)</Titulo>
                  <Text>
                    Durante o meu estágio, tive a oportunidade de aplicar o HTML
                    para criar a estrutura das telas do sistema de ERP. Utilizei
                    também a framework Bootstrap para agilizar o processo de
                    design responsivo e garantir uma aparência moderna e
                    consistente em todas as telas. Através do HTML e do
                    Bootstrap, pude definir a organização dos elementos nas
                    páginas, incluindo a criação de formulários, tabelas e
                    divisões. O HTML e o Bootstrap foram fundamentais para
                    estabelecer a base visual das telas e determinar como os
                    elementos seriam exibidos no navegador.
                  </Text>
                </Desc>
              ) : icon === 2 ? (
                <Desc>
                  <Titulo>CSS (Cascading Style Sheets)</Titulo>
                  <Text>
                    Utilizei o CSS para dar vida às telas do sistema de ERP.
                    Através dessa linguagem, pude aplicar estilos visuais, como
                    cores, fontes, tamanhos e layouts, garantindo uma aparência
                    coesa e agradável. A aplicação do CSS foi essencial para
                    criar uma experiência visualmente consistente e atraente
                    para os usuários que interagem com o sistema.
                  </Text>
                </Desc>
              ) : icon === 3 ? (
                <Desc>
                  <Titulo>JavaScript (JS)</Titulo>
                  <Text>
                    Durante o estágio, aproveitei o JavaScript, juntamente com a
                    biblioteca jQuery, para adicionar interatividade às telas do
                    sistema de ERP. Isso incluiu a implementação de validações
                    de formulários, animações e atualizações em tempo real. Com
                    a ajuda do jQuery, consegui simplificar a manipulação do DOM
                    e a comunicação assíncrona com o servidor, tornando as telas
                    mais dinâmicas e responsivas. Essa abordagem melhorou
                    significativamente a experiência do usuário ao interagir com
                    o sistema.{" "}
                  </Text>
                </Desc>
              ) : icon === 4 ? (
                <Desc>
                  <Titulo>PHP</Titulo>
                  <Text>
                    No decorrer do meu estágio, tive a oportunidade de trabalhar
                    com PHP para lidar com a lógica de negócios e a interação
                    com o banco de dados do sistema de ERP. Para estabelecer as
                    conexões com o banco de dados de maneira segura e eficiente,
                    utilizei a extensão PDO (PHP Data Objects). Além disso,
                    implementei a biblioteca Fpdf para gerar relatórios em PDF
                    diretamente a partir dos dados do sistema. Com o uso do PDO,
                    pude garantir a integridade das conexões com o banco de
                    dados, enquanto o Fpdf permitiu a criação de relatórios
                    personalizados de forma automática, agregando um valor
                    significativo ao sistema.
                  </Text>
                </Desc>
              ) : icon === 5 ? (
                <Desc>
                  <Titulo>SQL (Structured Query Language)</Titulo>
                  <Text>
                    Durante o estágio, o SQL desempenhou um papel crucial na
                    gestão dos dados do sistema de ERP. Utilizei o SQL no SQL
                    Management Studio para executar operações como alterações,
                    inserções e exclusões de dados em tabelas. Além disso, criei
                    consultas avançadas para recuperar informações específicas e
                    relacionamentos complexos entre os dados. Essas consultas
                    foram essenciais para fornecer insights valiosos aos
                    usuários e auxiliar na tomada de decisões informadas.
                  </Text>
                </Desc>
              ) : (
                <></>
              )}
            </Infos>
          ) : work === "Portifólio" ? (
            <h1>portifolio</h1>
          ) : work === "App Teste" ? (
            <h1>app teste</h1>
          ) : (
            <DivInvisible></DivInvisible>
          )}
        </Div_right>
      </Div_principal>
    </Section>
  );
};

export default Habilidades;
