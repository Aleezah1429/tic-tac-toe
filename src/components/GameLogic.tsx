import * as React from 'react';
import "../Game.css"

export type Value = "X" | "O" | null;
export type BoardState = Value[];

const BoardValue = () => Array<Value>(9).fill(null);

// calculate winner
function CalculateWinner(BoardState: BoardState) {
    const winGame = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (var i = 0; i <= winGame.length; i++) {
        const [a, b, c] = winGame[i]
        if (BoardState[a] && BoardState[b] === BoardState[a] && BoardState[b] && BoardState[c] === BoardState[a]) {
            return BoardState[a];
        }
    }
    return null
}


interface GameState {
    history: BoardState[];
    step: number;
}

function GameLogic() {
    const [gameState, setGameState] = React.useState<GameState>({
        history: [BoardValue()],
        step: 0
    });

    const current = gameState.history[gameState.step];
    const winner = CalculateWinner(current);
    const xIsNext = (gameState.step % 2) === 0;

    // click square box
    function handleClick(square: number) {
        const history = gameState.history.slice(0, gameState.step + 1);
        const BoardState = history[history.length - 1];
        if (CalculateWinner(BoardState) || BoardState[square]) {
            return;
        }
        const newBoardState = BoardState.slice();
        newBoardState[square] = (gameState.step % 2) === 0 ? 'X' : 'O';
        history.push(newBoardState);
        setGameState({
            history: history,
            step: history.length - 1,
        });
    }

    // jump any square box
    function jumpTo(step: number) {
        setGameState({
            history: gameState.history,
            step,
        });
    }

    return {
        gameState,
        current,
        xIsNext,
        winner,
        handleClick,
        jumpTo
    };
}

export default GameLogic;