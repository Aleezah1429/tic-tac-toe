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

    for (var i = 0; i < winGame.length; i++) {
        const [a, b, c] = winGame[i];
        if (BoardState[a] && BoardState[a] === BoardState[b] && BoardState[a] === BoardState[c]) {
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

    console.log("current", current)

    // click square box
    function handleClick(square: number) {
        if (xIsNext) {
            console.log("user turn")
            const history = gameState.history.slice(0, gameState.step + 1);
            const BoardState = history[history.length - 1];
            if (CalculateWinner(BoardState) || BoardState[square]) {
                return;
            }
            const newBoardState = BoardState.slice();
            newBoardState[square] = xIsNext ? 'X' : 'O';
            history.push(newBoardState);
            setGameState({
                history: history,
                step: history.length - 1,
            });
        }
        // else{
        //     console.log("Computer turn")
        //     const history = gameState.history.slice(0, gameState.step + 1);
        //     const BoardState = history[history.length - 1];
        //     if (CalculateWinner(BoardState) || BoardState[square]) {
        //         return;
        //     }
        //     const newBoardState = BoardState.slice();
        //     newBoardState[square] = xIsNext ? 'X' : 'O';
        //     history.push(newBoardState);
        //     setGameState({
        //         history: history,
        //         step: history.length - 1,
        //     });
        // }

    }

    // Computer Turn
    function ComputerTurn() {
        console.log("Computer turn")
        const randomNo: any = GenerateComputerStep()
        const history = gameState.history.slice(0, gameState.step + 1);
        const BoardState = history[history.length - 1];
        if (CalculateWinner(BoardState) || BoardState[randomNo]) {
            return;
        }
        const newBoardState = BoardState.slice();
        newBoardState[randomNo] = xIsNext ? 'X' : 'O';
        history.push(newBoardState);
        setGameState({
            history: history,
            step: history.length - 1,
        });
    }

    function GenerateComputerStep() {
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

        const computer = current.reduce(function (ind: any, el: any, i: any) {
            if (el === 'O')
                ind.push(i);
            return ind;
        }, []);
        const player = current.reduce(function (ind: any, el: any, i: any) {
            if (el === 'X')
                ind.push(i);
            return ind;
        }, []);

        console.log("player lenght", player, computer)


        if (player.length == 2) {
            console.log("iffff")
            for (var j = 0; j < winGame.length; j++) {

                const first = winGame[j].indexOf(player[0])
                if (first != -1) {
                    const second = winGame[j].indexOf(player[1])
                    if (second != -1) {
                        for (var k = 0; k < winGame[j].length; k++) {

                            console.log("first", first, "second", second)

                            console.log("winGame[j][k]", winGame[j][k])
                            if (first != winGame[j][k] && second != winGame[j][k]) {
                                return winGame[j][k]
                            }
                        }
                    }
                }

            }
        }
        else {
            console.log("randommm", current)
            const RandArray: any = current.reduce(function (ind: any, el: any, i: any) {
                if (el === null)
                    ind.push(i);
                return ind

            }, []);
            return RandArray[Math.floor(Math.random() * RandArray.length)]

        }


    }


    return {
        gameState,
        current,
        xIsNext,
        winner,
        handleClick,
        setGameState,
        BoardValue,
        ComputerTurn
    };
}

export default GameLogic;