import styles from './Home.module.scss';

import Grid from '../../components/Grid/Grid.jsx';
import { useEffect } from 'react';

const Home = () => {

    let intent = 0;

    return(

        <main className={styles.homeMain}>

            <Grid activeRow={intent}></Grid>

            <section className={styles.homeKeyboard}>

                <button>ENVIAR</button>

            </section>

        </main>

    )

}

export default Home;