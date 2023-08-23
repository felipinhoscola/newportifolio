import Image from "next/image";
import Link from "next/link";
import logotipo from "@/public/images/logotipo.svg";
import css from "./header.module.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () =>{
    return (
    <div className={css.container}>
        
        <div className="">
            <Image className={css.logo_tamanho} src={logotipo}/>
        </div>
        <div className={css.menu_principal}>
            <div className={css.lista_menu}>
                <a className={css.anchor} href="#section_exp">Experiências</a>
                <a className={css.anchor} href="#section_sobre">Sobre Mim</a>
                <a className={css.anchor} href="#section_projetos">Projetos</a>
            </div>   
        </div>
        <div className={css.contact}>
            <a className={css.anchor} href="#section-contact">Contate-me</a>
        </div>
        <div className={css.dropdown}>
            <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#section_exp">Experiências</Dropdown.Item>
                    <Dropdown.Item href="#section_sobre">Sobre Mim</Dropdown.Item>
                    <Dropdown.Item href="#section_projetos">Projetos</Dropdown.Item>
                    <Dropdown.Item href="#section-contact">Contate-me</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        
        {/* <div className={css.dropdown}>
            <span className={css.button}>Menu</span>
            <div className={css.dropdownContent}>
                <Link href="#section_exp">Experiências</Link>
                <Link href="#section_sobre">Sobre Mim</Link>
                <Link href="#section_projetos">Projetos</Link>
            </div>   
        </div> */}
    </div>
    ) 
}

export default Header