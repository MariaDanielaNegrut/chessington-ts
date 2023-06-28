import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
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

        return availableMoves;
    }
}
