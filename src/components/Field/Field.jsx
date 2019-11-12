import React from 'react';
import '../../App.css';
import PopUp from "../PopUp/PopUp";
import ResultTable from "../ResultTable/ResultTable";
import Footer from "../Footer/Footer";


const Field = (props) => {
    return <article className="field">
        <section>
            {props.isPopUpActive ?
                <PopUp getName1={props.getName1} getName2={props.getName2} closePopUp={props.closePopUp}/> : null}

            {props.isStartGame ? <div><h2>THE GAME {props.winner || (props.fullness === 0)  ? 'OVER' : 'STARTED'}</h2>
                    <h3>{props.status}</h3></div>
                : <button className='buttonStart' onClick={props.startGame}>START GAME</button>}

            <aside className="cells">{props.cells}</aside>
            <Footer fullness={props.fullness} winner={props.winner}
                    startGameAgain={props.startGameAgain} continueGame={props.continueGame}/>
        </section>
        <ResultTable gamer1={props.gamer1} gamer2={props.gamer2} isStartGame={props.isStartGame}/>
    </article>
};

export default Field;