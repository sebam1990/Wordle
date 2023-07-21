import styles from './Home.module.scss';

import Grid from '../../components/Grid/Grid.jsx';
import Keyboard from '../../components/Keyboard/Keyboard.jsx';


const Home = () => {

    let intent = 1;

    return(

        <main className={styles.homeMain}>

            <Grid activeRow={intent}></Grid>

            <Keyboard></Keyboard>

        </main>

    )

}

export default Home;