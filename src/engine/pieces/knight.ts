import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = [];

        if (currentSquare.col + 2 < 8 && currentSquare.row - 1 >= 0) {
            const possibleMove: Square = Square.at(currentSquare.row - 1, currentSquare.col + 2);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
            }
        }

        if (currentSquare.col - 2 >= 0 && currentSquare.row - 1 >= 0) {
            const possibleMove: Square = Square.at(currentSquare.row - 1, currentSquare.col - 2);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
            }
        }

        if (currentSquare.col + 2 < 8 && currentSquare.row + 1 < 8) {
            const possibleMove: Square = Square.at(currentSquare.row + 1, currentSquare.col + 2);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
            }
        }

        if (currentSquare.col - 2 >= 0 && currentSquare.row + 1 < 8) {
            const possibleMove: Square = Square.at(currentSquare.row + 1, currentSquare.col - 2);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
            }
        }

        if (currentSquare.col + 1 < 8 && currentSquare.row + 2 < 8) {
            const possibleMove: Square = Square.at(currentSquare.row + 2, currentSquare.col + 1);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
            }
        }

        if (currentSquare.col - 1 >= 0 && currentSquare.row + 2 < 8) {
            const possibleMove: Square = Square.at(currentSquare.row + 2, currentSquare.col - 1);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
            }
        }

        if (currentSquare.col + 1 < 8 && currentSquare.row - 2 >= 0) {
            const possibleMove: Square = Square.at(currentSquare.row - 2, currentSquare.col + 1);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
            }
        }

        if (currentSquare.col - 1 >= 0 && currentSquare.row - 2 >= 0) {
            const possibleMove: Square = Square.at(currentSquare.row - 2, currentSquare.col - 1);
            const pieceOnSquare = board.getPiece(possibleMove);

            if (pieceOnSquare === undefined) {
                availableMoves.push(possibleMove);
            } else {
                if (pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
            }
        }

        return availableMoves;
    }
}
