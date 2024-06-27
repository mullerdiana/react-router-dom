import styles from './Prato.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';

export default function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();

  const prato = cardapio.find(item=> item.id === Number(id));

  if(!prato){ return '';}
  //   console.log('uselocation:', useLocation());
  // {
  //     "pathname": "/prato/5",
  //     "search": "",
  //     "hash": "",
  //     "state": {
  //         "title": "Bife com batatas",
  //         "description": "Bife de boi (150g) na chapa, com batatas fritas. Acompanha arroz e molhos.",
  //         "photo": "/assets/pratos/bife_com_batatas.png",
  //         "size": 550,
  //         "serving": 2,
  //         "price": 86,
  //         "id": 5,
  //         "category": {
  //             "id": 2,
  //             "label": "Carnes"
  //         }
  //     },

  //     "key": "7h6naz07"}
  // const { state } = useLocation();
  //  useLocation tem o state dentro, recebendo do useNavigate que está na página Home, mas só carregaria os dados do state se passar pela rota /inicio>ver mais para um prato específico. O melhor será carregar os dados a partir dos params
  // const { prato } = state;
  //const { prato } = state as {prato: typeof cardapio[0]};


  return (
    <>
      <button className={styles.voltar} onClick={()=>navigate(-1)}>{'< Voltar'}</button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{prato.description}</p>
          <TagsPrato {...prato}/>
        </div>
      </section>
    </>
  );
}
