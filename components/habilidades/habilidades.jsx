import Link from "next/link";
import css from "./habilidades.module.scss";
import styled from 'styled-components'

const Titulo = styled.div`
    display : flex;
    justify-content: center;
    margin-top: 2rem;
    font-size: 4.5rem;
    font-weight: bold;
    font-family: 'Anton', sans-serif;
`;
const Div_principal = styled.div`
    margin-top: 13%;
    display: flex;
    align-items:start;
    justify-content:  space-evenly;
    height: 100vh;
    gap: 25;
`;
const Div_primaria = styled.div`
    
`;
const Div_secundaria = styled.div`
    
`;

const Ul = styled.div`
    list-style-type: none;
    padding-left: 0;
    font-weight: bold;
    font-family: 'Anton', sans-serif;
    color: #ddaebe;
    font-size: 2rem;
`;

const Habilidades = () =>{
    return (
        <div className={css.container}>
            <Titulo>Habilidades</Titulo>
            <Div_principal>
                <Div_primaria>
                <Ul>
                    <li><a>Estágio</a></li>
                    <li><a>Portfólio</a></li>
                    <li><a>App Gestão De Salões</a></li>
                </Ul>
                </Div_primaria>
                <Div_secundaria>A</Div_secundaria>
            </Div_principal>
        </div>
    ) 
}

export default Habilidades