import * as React from 'react';
import "../Game.css";
import GameLogic, { BoardState } from './GameLogic';


// interface => type describe 
interface boardProps{
    board: BoardState;
    onClick: (square:number) => void
}

function Board({board, onClick}:boardProps) {

    return (
        <div className='Board'>
            <div className='Row'>
                <div className='Column'>
                    ffff
                </div>
                <div className='Column'>
                    ffff
                </div>
                <div className='Column'>
                    ffff
                </div>
            </div>
            <div className='Row'>
                <div className='Column'>
                    ffff
                </div>
                <div className='Column'>
                    ffff
                </div>
                <div className='Column'>
                    ffff
                </div>
            </div>
            <div className='Row'>
                <div className='Column'>
                    ffff
                </div>
                <div className='Column'>
                    ffff
                </div>
                <div className='Column'>
                    ffff
                </div>
            </div>
        </div>

    );
}
export default Board;