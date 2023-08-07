import styled from "styled-components";
import css from "./sobre.module.scss";
import Header from '@/components/sobre_mim/header/header'
import Image from "next/image";
import linha from "@/public/images/line.svg"
import buracoNegro from "@/public/images/buraco_negro.png"


const Sobre = () =>{
    return (
        <div className={css.container}>
            <Header />
            <div className={css.div_sobre}>
                <div className={css.div_top}>
                    <p className={css.titulo}>Olá, Sou O <br/>Felipe Scola</p>
                    <div className={css.info_sobre}>
                        <Image className={css.linha} src={linha}></Image>
                        <p className={css.text_sobre}>Quem sou Eu</p>
                    </div>
                    <p className={css.desc_sobre}> Estou em formando em sistemas...</p>
                </div>
                <div className={css.div_bottom}>
                <Image className={css.buraco_negro} src={buracoNegro}></Image>
                </div>
            </div>
        </div>
    ) 
}

export default Sobre