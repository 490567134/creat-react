import styles from './index.module.scss';
import Menu from '../menu';

function Home() {
  return (
    <div className={styles.homeBox} >
      <div className={styles.homeHeader}>
        home page
      </div>
      <Menu />
    </div >
  )
}
export default Home