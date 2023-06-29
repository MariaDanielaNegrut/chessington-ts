import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = [];

        if (currentSquare.col + 2 < 8 && currentSquare.row - 1 >= 0) {
            availableMoves.push(new Square(currentSquare.row - 1, currentSquare.col + 2));
        }

        if (currentSquare.col - 2 >= 0 && currentSquare.row - 1 >= 0) {
            availableMoves.push(new Square(currentSquare.row - 1, currentSquare.col - 2));
        }

        if (currentSquare.col + 2 < 8 && currentSquare.row + 1 < 8) {
            availableMoves.push(new Square(currentSquare.row + 1, currentSquare.col + 2));
        }

        if (currentSquare.col - 2 >= 0 && currentSquare.row + 1 < 8) {
            availableMoves.push(new Square(currentSquare.row + 1, currentSquare.col - 2));
        }

        if (currentSquare.col + 1 < 8 && currentSquare.row + 2 < 8) {
            availableMoves.push(new Square(currentSquare.row + 2, currentSquare.col + 1));
        }

        if (currentSquare.col - 1 >= 0 && currentSquare.row + 2 < 8) {
            availableMoves.push(new Square(currentSquare.row + 2, currentSquare.col - 1));
        }

        if (currentSquare.col + 1 < 8 && currentSquare.row - 2 >= 0) {
            availableMoves.push(new Square(currentSquare.row - 2, currentSquare.col + 1));
        }

        if (currentSquare.col - 1 >= 0 && currentSquare.row - 2 >= 0) {
            availableMoves.push(new Square(currentSquare.row - 2, currentSquare.col - 1));
        }

        return availableMoves;
    }
}
