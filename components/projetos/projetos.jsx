import css from "./projetos.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from "@fortawesome/free-solid-svg-icons";
// varios cards com projetos, contendo uma breve desc e o link para github, no estilo grid um do lado do outro, fundo de vidro
// passa o mouse em cima ele da uma crescida com uma logo no meio do card bem basica, fazer usando string para conseguir adicionar mais projetos
const conteudos = {
  portifolio: {
    nome : "Portifólio",
    titulo : "Projeto de Portfólio Dinâmico com React",
    desc : "Meu portfólio é a materialização da minha jornada profissional e habilidades técnicas, tudo graças à magia do React. Cada componente e animação foram meticulosamente construídos usando o poder dessa biblioteca JavaScript. Convido você a explorar um espaço onde a criatividade encontra a tecnologia de forma única, proporcionando uma experiência interativa e envolvente.",
    github : "https://github.com/felipinhoscola/newportifolio"
  },
  todolist: {
    nome : "To-Do List",
    titulo : "Projeto To-Do List com Node.js, Express, MongoDB e Mongoose",
    desc : "Meu projeto To-Do List é o resultado da união entre tecnologias de ponta. Utilizando Node.js e Express, criei uma plataforma ágil e responsiva para gerenciar tarefas. O armazenamento seguro é garantido pelo MongoDB, implementado com o auxílio do Mongoose. Convido você a experimentar a eficiência e praticidade desta aplicação, onde a organização de afazeres se encontra com a inovação tecnológica.",
    github : "https://github.com/felipinhoscola/to-do-list"
  },
};

const dataConteudos = Object.values(conteudos);

const Projetos = () => {
  return (
    <div className={css.container} id="section_projetos">
        <div className={css.sessaoCard}>
            {dataConteudos.map((item) => (
                <div className={css.card}>
                    <div className={css.cardContent}>
                        <div className={css.cardHead}>{item.nome}</div>
                        <div className={css.cardTitle}><p>{item.titulo}</p></div>
                        <div className={css.cardDesc}><>{item.desc}</></div>
                        <div className={css.cardAnx} >
                            <a className={css.anx} href={item.github} target="_blank">
                                <FontAwesomeIcon size="2xl"  icon={faLink}/>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div> 
    </div>);
};

export default Projetos;
