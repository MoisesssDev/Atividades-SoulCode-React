import styles from './CardAluno.module.css';
import PropsTypes from 'prop-types';

export default function CardAluno({ aluno }) {
  return (
    <div className={styles.card}>
      <img src={aluno.foto} alt={aluno.nome} />
      <p className={styles.serie}>{aluno.serie}</p>
      <h2>{aluno.nome}</h2>
      <p className={styles.idade}>{aluno.idade} anos</p>
      <p className={styles.media}>Média: {aluno.media}</p>
      {aluno.media >= 6 ? <p className={styles.aprovado}>Aprovado</p> : <p className={styles.reprovado}>Reprovado</p>}
    </div>
  );
}

CardAluno.propTypes = {
  aluno: PropsTypes.shape({
    nome: PropsTypes.string.isRequired,
    idade: PropsTypes.number.isRequired,
    serie: PropsTypes.string.isRequired,
    foto: PropsTypes.string.isRequired,
    media: PropsTypes.number.isRequired,
  }),
};