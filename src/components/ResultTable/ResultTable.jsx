import React from 'react';
import styles from './ResultTable.module.css';

function ResultTable(props) {

    return <div className={styles.container}>
        <section>
            <h2>Result table</h2>
        </section>
        {/*{props.isStartGame &&*/}
        <thead>
        <tr>
            <th className={styles.table}>{props.gamer1}</th>
            <th className={styles.table}>{props.gamer2}</th>
        </tr>
        <tr>
            <td className={styles.table}>0</td>
            <td className={styles.table}>0</td>
        </tr>
        <tr>
            <td className={styles.table}>0</td>
            <td className={styles.table}>0</td>
        </tr>
        <tr>
            <td className={styles.table}>0</td>
            <td className={styles.table}>0</td>
        </tr>
        </thead>
    </div>
}

export default ResultTable;
