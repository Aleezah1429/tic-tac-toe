import * as React from 'react';
import "../Game.css";
import GameLogic  from './GameLogic';
import  Board  from "./Board"

function TicTacToeGame() {
    const {
        gameState,
        current,
        xIsNext,
        jumpTo,
        winner,
        handleClick,
    } = GameLogic();

    return (
        <div className='Board'>
            <div className='Row'>
                <div className='Column'>
                    <div>{
                        winner
                            ? `Winner ${winner}`
                            : `Next Player ${xIsNext ? 'X' : 'O'}`
                    }</div>
                    <Board board={current} onClick={handleClick} />
                </div>
                {/* <Log history={gameState.history} jumpTo={jumpTo} /> */}
            </div>
        </div>

    );
}
export default TicTacToeGame;