
import RouterConfig from '../../router/router';
import styles from './index.module.scss';
const Main = () => {
  return (
    // 路由判断
    <div className={styles.container}>
      <RouterConfig />
    </div>
  )
}
export default Main