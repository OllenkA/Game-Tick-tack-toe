import React from 'react';
import styles from './PopUp.module.css';

function PopUp(props) {
    return (<section className={styles.popupMain}>
            <span onClick={props.closePopUp} className={styles.span}>X</span>
            <div className={styles.popup}>
                <h3>HI!</h3>
                <h4 className={styles.name}>Enter your name, please:</h4>
                <input className={styles.input} onChange={props.getName1} placeholder={'Gamer 1'}/>
                <h4 className={styles.name}>Enter name your rival, please:</h4>
                <input className={styles.input} onChange={props.getName2} placeholder={'Gamer 2'}/>
                <button className={styles.button} onClick={props.closePopUp}>Ok</button>
            </div>
        </section>

    );
}

export default PopUp;
