import cardapio from 'data/cardapio.json';
import styles from './home.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Home() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato:Prato) {
    // Quando utilizamos a propriedade replace estamos dizendo que queremos substituir a última rota do histórico do navegador por essa rota que passamos como primeiro parâmetro. Sendo assim, caso voltássemos na rota anterior, não iríamos para essa rota substituída.
    navigate(`/prato/${prato.id}`, {state: {prato}, replace: true});
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
              <button
                className={styles.recomendado__botao}
                onClick={() => redirecionarParaDetalhes(item)}
              >
                Ver mais
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185
          <br />
          <br />
          Vila Mariana -SP
        </div>
      </div>
    </section>
  );
}
