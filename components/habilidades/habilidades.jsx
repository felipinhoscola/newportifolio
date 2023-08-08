import Link from "next/link";
import css from "./habilidades.module.scss";
import styled from 'styled-components'
import seta from "@/public/images/down-arrow.png"
import Image from "next/image";
import { useState } from "react";


const data = [
    "Estágio",
    "Portifólio",
    "App Teste"
];
//consts
const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`;
const Div_principal = styled.div`
    display: flex;
    align-items:center;
    justify-content:  space-evenly;
    height: 100vh;
    gap: 25;
`;
const Div_primaria = styled.div`
    
`;
const Div_secundaria = styled.div`
`;
const DivInvisible = styled.div`
    display: none;
`;
const Ul = styled.div`
    list-style-type: none;
    padding-left: 0;
    font-weight: bold;
    font-family: 'Anton', sans-serif;
    color: #ddaebe;
    font-size: 4rem;
`;
const Topicos = styled.div`
    transition: transform 0.2s;
    &:hover{
        transform: scale(1.1);
        color: #dbc4cb;
    }
    `;
//functions



const Habilidades = () =>{
    const [work, setWork] = useState("");
    return (
        <Section id="section_exp">
            <Div_principal>
                <Div_primaria>
                <Ul>
                    {/* Corre o array e colocando o valor em cada lugar q chama o item */}
                    {data.map((item) =>(
                        <li><Topicos key={item} onClick={() => setWork(item)}>{item}</Topicos></li>
                    ))}
                </Ul>
                </Div_primaria>
                <Div_secundaria>
                    {work === "Estágio" ? (
                        <h1>Estagiio</h1>
                    ) : work === "Portifólio" ? (
                        <h1>portifolio</h1>
                    ) : work === "App Teste" ? (
                        <h1>app teste</h1>
                    ) : (
                      <DivInvisible></DivInvisible>  
                    )}
                </Div_secundaria>
            </Div_principal>
        </Section>
    ) 
}

export default Habilidades