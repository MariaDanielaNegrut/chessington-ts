import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare: Square = board.findPiece(this);
        if (this.player === Player.WHITE) {
            return [new Square(currentSquare.row + 1, currentSquare.col)];
        } else {
            return [new Square(currentSquare.row - 1, currentSquare.col)];
        }
    }
}
