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

        for (let i = currentSquare.row + 1; i < 8; i++) {
            const possibleMove = new Square(i, currentSquare.col);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                break;
            }
        }

        for (let i = currentSquare.row - 1; i >= 0; i--) {
            const possibleMove = new Square(i, currentSquare.col);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                break;
            }
        }

        for (let i = currentSquare.col - 1; i >= 0; i--) {
            const possibleMove = new Square(currentSquare.row, i);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                break;
            }
        }

        for (let i = currentSquare.col + 1; i < 8; i++) {
            const possibleMove = new Square(currentSquare.row, i);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                break;
            }
        }

        return availableMoves;
    }
}
