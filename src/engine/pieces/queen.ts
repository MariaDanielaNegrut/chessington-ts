import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves: Square[] = [];
        const currentSquare: Square = board.findPiece(this);

        for (let i = 0; i < 8 ; i++) {
            const possibleMoveRow = new Square(i, currentSquare.col);
            const possibleMoveColumn = new Square(currentSquare.row, i);

            if (!possibleMoveRow.equals(currentSquare)) {
                availableMoves.push(possibleMoveRow);
            }

            if (!possibleMoveColumn.equals(currentSquare)) {
                availableMoves.push(possibleMoveColumn);
            }
        }


        for (let i = 1; i < 8; i++) {
            if (currentSquare.col - i >= 0 && currentSquare.row - i >= 0) {
                availableMoves.push(new Square(currentSquare.row - i, currentSquare.col - i));
            }

            if (currentSquare.col + i < 8 && currentSquare.row + i < 8) {
                availableMoves.push(new Square(currentSquare.row + i, currentSquare.col + i));
            }

            if (currentSquare.col + i < 8 && currentSquare.row - i >= 0) {
                availableMoves.push(new Square(currentSquare.row - i, currentSquare.col + i));
            }

            if (currentSquare.col - i >= 0 && currentSquare.row + i < 8) {
                availableMoves.push(new Square(currentSquare.row + i, currentSquare.col - i));
            }
        }

        return availableMoves;
    }
}
