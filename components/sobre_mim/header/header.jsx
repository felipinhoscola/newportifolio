import Image from "next/image";
import Link from "next/link";
import logotipo from "@/public/images/logotipo.svg";
import css from "./header.module.scss";

const Header = () =>{
    return (
    <div className={css.container}>
        <div className="">
            <Image className={css.logo_tamanho} src={logotipo}/>
        </div>
        <div className={css.menu_principal}>
            <div className={css.lista_menu}>
                <Link href="#section_exp">Experiências</Link>
                <Link href="#section_sobre">Sobre Mim</Link>
                <Link href="#section_projetos">Projetos</Link>
            </div>
        </div>
        <div className={css.contact}>
            <Link href="/">Contate-me</Link>
        </div>
    </div>
    ) 
}

export default Header