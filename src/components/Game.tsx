import * as React from 'react';
import "../Game.css";
import GameLogic from './GameLogic';
import Board from "./Board"

function TicTacToeGame() {
    const {
        current,
        xIsNext,
        jumpTo,
        winner,
        handleClick,
    } = GameLogic();

    // reset btn logic
    const Reset = (() => {
        console.log("reset")
    })

    return (
        <div className='Board'>
            <div className='Row'>
                <div>
                    <div className='winnerStyle'>{
                        winner
                            ? `Winner ${winner}`
                            : `Next Player ${xIsNext ? 'X' : 'O'}`
                    }</div>
                    <Board board={current} onClick={handleClick} />
                </div>
            </div>
            <button onClick={Reset} className='ResetBtn'>RESET</button>
        </div>

    );
}
export default TicTacToeGame;