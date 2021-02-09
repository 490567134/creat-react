import { Link } from 'react-router-dom';
import styles from './index.module.scss';
const Menu = () => {
  return (
    <div className={styles.menuBox}>
      <Link to="/home">go home</Link>
      <Link to="/about">go about</Link>
    </div>
  )
}

export default Menu