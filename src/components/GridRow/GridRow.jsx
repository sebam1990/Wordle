import { useEffect } from 'react';
import styles from './GridRow.module.scss'

const GridRow = (props) => {
    

    let a = {}
    
    a = props.rowWord;
    
    useEffect((pops) => {


        /*if(playerWord != undefined){

            playerWord.map((element) => {

                console.log(element);

            })

        }*/

        //console.log(playerWord);


        if(a != undefined){
    
            console.log(a.intent0);
    
        }




    })







    return(

        <section className={styles.row}>

            <p className={styles.rowLetter}>{""}</p>

            <p className={styles.rowLetter}>{""}</p>

            <p className={styles.rowLetter}>{""}</p>

            <p className={styles.rowLetter}>{""}</p>

            <p className={styles.rowLetter}>{""}</p>
        
        </section>

    )

}

export default GridRow;