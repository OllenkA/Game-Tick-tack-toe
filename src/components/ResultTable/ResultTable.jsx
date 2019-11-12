import React from 'react';
import styles from './ResultTable.module.css';

function ResultTable(props) {

    return <article>
        <section>
            <h2>Result table</h2>
        </section>
        {props.isStartGame &&
        <thead>
        <tr>
            <th style={{border: '1px solid black'}} className={styles.table}>{props.gamer1}</th>
            <th style={{border: '1px solid black'}} className={styles.table}>{props.gamer2}</th>
        </tr>
        <tr>
            <td style={{border: '1px solid black'}}>1</td>
            <td style={{border: '1px solid black'}}>0</td>
        </tr>
        <tr>
            <td style={{border: '1px solid black'}}>1</td>
            <td style={{border: '1px solid black'}}>0</td>
        </tr>
        <tr>
            <td style={{border: '1px solid black'}}>1</td>
            <td style={{border: '1px solid black'}}>0</td>
        </tr>
        </thead>}
    </article>
}

export default ResultTable;
