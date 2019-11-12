import React from 'react';
import styles from './PopUp.module.css';

function PopUp(props) {
    return (<section className={styles.popupMain}>
            <span onClick={props.closePopUp} style={{float: 'right'}}>X</span>
            <div className={styles.popup}>
                <h3>HI!</h3>
                <h4>Enter your name, please:</h4>
                <input onChange={props.getName1} placeholder={'Gamer 1'}/>
                <h4>Enter name your rival, please:</h4>
                <input onChange={props.getName2} placeholder={'Gamer 2'}/>
                <button onClick={props.closePopUp}>Ok</button>
            </div>
        </section>

    );
}

export default PopUp;
