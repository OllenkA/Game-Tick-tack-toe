import React from 'react';
import styles from './Cell.module.css';

function Cell(props) {
    return (
        <button onClick={() => props.isStartGame?props.onClickCell(props.id):null}
             disabled={props.value}
             className={styles.cell}>
            <h2>{props.value}</h2>
        </button>
    );
}

export default Cell;
