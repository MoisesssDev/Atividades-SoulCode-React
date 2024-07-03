import styles from './CardProduto.module.css'
import PropTypes from 'prop-types'

export default function CardProduto(props) {
  return (
    <div className={styles.card}>
      <img src={props.imagem} alt={props.nome} />
      <p className={styles.discount}>{props.desconto}</p>
      <p className={styles.price}>{props.preco}</p>
      <h2>{props.nome}</h2>
    </div>
  )
}

CardProduto.propTypes = {
  imagem: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  desconto: PropTypes.string.isRequired
}