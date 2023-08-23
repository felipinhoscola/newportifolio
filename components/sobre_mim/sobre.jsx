import styled from "styled-components";
import css from "./sobre.module.scss";
import Header from '@/components/sobre_mim/header/header'
import Image from "next/image";
import linha from "@/public/images/line.svg"
import buracoNegro from "@/public/images/buraco_negro.png"
//teste
const Section = styled.div`
    height:100vh;
    scroll-snap-align: center;
`;

const Sobre = () =>{
    return (
        <Section id="section_sobre">
            <div className={css.container}>
                <Header />
                <div className={css.div_sobre}>
                    <div className={css.div_top}>
                        <p className={css.titulo}>Olá, Sou O <br/>Felipe Scola</p>
                        <div className={css.info_sobre}>
                            <Image className={css.linha} src={linha}></Image>
                            <p className={css.text_sobre}>Quem sou Eu</p>
                        </div>
                        <p className={css.desc_sobre}>Estudante de Sistema de Informação com experiência prática no mercado de 7 meses em estágio fullstack, focado em desenvolvimento de planejamento de recursos empresariais (eRP). Procuro uma nova oportunidade para continuar crescendo no desenvolvimento fullstack.<br />

                        </p>
                    </div>
                    <div className={css.div_bottom}>
                        <Image className={css.buraco_negro} src={buracoNegro}></Image>
                        <div className={css.nebula}>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
        
    ) 
}

export default Sobre