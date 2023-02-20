import * as React from "react";
import "../Game.css";
import GameLogic, { BoardState } from "./GameLogic";
import { Value } from "./GameLogic";

// interface => type describe
interface boardProps {
	board: BoardState;
	onClick: (square: number) => void;
}

// interface for 1 square box
interface SquareProps {
	value: Value;
	onClickSquare: () => void;
}

// squre box function
export const Square: React.FunctionComponent<SquareProps> = (props) => {
	return (
		<div className="Column" onClick={props.onClickSquare}>
			{props.value}
		</div>
	);
};

function Board({ board, onClick }: boardProps) {
	// create board func
	const createProps = React.useCallback((square: number): SquareProps => {
		return {
			value: board[square],
			onClickSquare: () => onClick(square),
		};
	}, []);

	return (
		<div className="Board">
			<div className="Row">
				<Square {...createProps(0)} />
				<Square {...createProps(1)} />
				<Square {...createProps(2)} />
			</div>
			<div className="Row">
				<Square {...createProps(3)} />
				<Square {...createProps(4)} />
				<Square {...createProps(5)} />
			</div>
			<div className="Row">
				<Square {...createProps(6)} />
				<Square {...createProps(7)} />
				<Square {...createProps(8)} />
			</div>
		</div>
	);
}
export default Board;
