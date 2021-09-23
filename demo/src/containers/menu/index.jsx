import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { Button } from 'antd';
const Menu = () => {
  return (
    <div className={styles.menuBox}>
      <div className={styles.menuBtnBox}>
        <Button type='primary'>
          <Link to="/home">go home</Link>
        </Button>
      </div>
      <div className={styles.menuBtnBox}>
        <Button type='primary'>
          <Link to="/about">go about</Link>
        </Button>
      </div>
      <div className={styles.menuBtnBox}>
        <Button type='primary'>
          <Link to="/hookexercise">go HookExercise</Link>
        </Button>
      </div>
    </div>
  )
}

export default Menu