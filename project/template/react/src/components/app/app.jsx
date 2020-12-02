import styles from './app.css';
import image from '../../assets/images/logo.png';

const App = () => (
    <header className={styles.default} data-test='component-app'>
        <picture className={styles.picture}>
            <source srcSet={image} type='image/png' />
            <img src={image} alt='' className={styles.logo} />
        </picture>
        <h1 className={styles.heading}>Hello World!</h1>
    </header>
);

export default App;
