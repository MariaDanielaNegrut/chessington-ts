import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = [];

        for (let i = 1; i < 8; i++) {
            if (currentSquare.col - i >= 0 && currentSquare.row - i >= 0) {
                const possibleMove: Square = new Square(currentSquare.row - i, currentSquare.col - i);
                const pieceOnSquare = board.getPiece(possibleMove);

                if (pieceOnSquare === undefined) {
                    availableMoves.push(possibleMove);
                } else {
                    if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                        availableMoves.push(possibleMove);
                    }
                    break;
                }
            }

            if (currentSquare.col + i < 8 && currentSquare.row + i < 8) {
                const possibleMove: Square = new Square(currentSquare.row + i, currentSquare.col + i);
                const pieceOnSquare = board.getPiece(possibleMove);

                if (pieceOnSquare === undefined) {
                    availableMoves.push(possibleMove);
                } else {
                    if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                        availableMoves.push(possibleMove);
                    }
                    break;
                }
            }

            if (currentSquare.col + i < 8 && currentSquare.row - i >= 0) {
                const possibleMove: Square = new Square(currentSquare.row - i, currentSquare.col + i);
                const pieceOnSquare = board.getPiece(possibleMove);

                if (pieceOnSquare === undefined) {
                    availableMoves.push(possibleMove);
                } else {
                    if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                        availableMoves.push(possibleMove);
                    }
                    break;
                }
            }

            if (currentSquare.col - i >= 0 && currentSquare.row + i < 8) {
                const possibleMove: Square = new Square(currentSquare.row + i, currentSquare.col - i);
                const pieceOnSquare = board.getPiece(possibleMove);

                if (pieceOnSquare === undefined) {
                    availableMoves.push(possibleMove);
                } else {
                    if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                        availableMoves.push(possibleMove);
                    }
                    break;
                }
            }
        }
        return availableMoves;
    }
}
