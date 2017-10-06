import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public didFirstMove: boolean = false;
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare: Square = board.findPiece(this);
        if (this.player === Player.WHITE) {
            const availableMoves = [new Square(currentSquare.row + 1, currentSquare.col)];
            if (this.didFirstMove === false) {
                availableMoves.push(new Square(currentSquare.row + 2, currentSquare.col));
            }

            return availableMoves;
        } else {
            const availableMoves = [new Square(currentSquare.row - 1, currentSquare.col)];
            if (this.didFirstMove === false) {
                availableMoves.push(new Square(currentSquare.row - 2, currentSquare.col));
            }

            return availableMoves;
        }
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.didFirstMove = true;
    }
}
