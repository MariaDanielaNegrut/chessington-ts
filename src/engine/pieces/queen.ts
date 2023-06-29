import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves: Square[] = [];
        const currentSquare: Square = board.findPiece(this);

        for (let i = currentSquare.row + 1; i < 8; i++) {
            const possibleMove: Square = Square.at(i, currentSquare.col);
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

        for (let i = currentSquare.row - 1; i >= 0; i--) {
            const possibleMove: Square = Square.at(i, currentSquare.col);
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

        for (let i = currentSquare.col - 1; i >= 0; i--) {
            const possibleMove: Square = Square.at(currentSquare.row, i);
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

        for (let i = currentSquare.col + 1; i < 8; i++) {
            const possibleMove: Square = Square.at(currentSquare.row, i);
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

        for (let i = 1; currentSquare.col - i >= 0 && currentSquare.row - i >= 0; i++) {
            const possibleMove: Square = Square.at(currentSquare.row - i, currentSquare.col - i);
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

        for (let i = 1; currentSquare.col + i < 8 && currentSquare.row + i < 8; i++) {
            const possibleMove: Square = Square.at(currentSquare.row + i, currentSquare.col + i);
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

        for (let i = 1; currentSquare.col + i < 8 && currentSquare.row - i >= 0; i++) {
            const possibleMove: Square = Square.at(currentSquare.row - i, currentSquare.col + i);
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

        for (let i = 1; currentSquare.col - i >= 0 && currentSquare.row + i < 8; i++) {
            const possibleMove: Square = Square.at(currentSquare.row + i, currentSquare.col - i);
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

        return availableMoves;
    }
}
