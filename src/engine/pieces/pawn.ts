import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Pawn extends Piece {
    public didFirstMove: boolean = false;
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = [];

        if (this.player === Player.WHITE) {
            if (currentSquare.row + 1 < 8) {
                let square: Square = new Square(currentSquare.row + 1, currentSquare.col);
                if (board.getPiece(square) === undefined) {
                    availableMoves.push(square);

                    if (this.didFirstMove === false) {
                        let square: Square = new Square(currentSquare.row + 2, currentSquare.col);
                        if (board.getPiece(square) === undefined) {
                            availableMoves.push(square);
                        }
                    }
                }
            }

            if (currentSquare.row + 1 < 8 && currentSquare.col + 1 < 8) {
                let possibleMove: Square = new Square(currentSquare.row + 1, currentSquare.col + 1);
                const pieceOnSquare = board.getPiece(possibleMove);

                if (!!pieceOnSquare && pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
            }

            if (currentSquare.row + 1 < 8 && currentSquare.col - 1 >= 0) {
                let possibleMove: Square = new Square(currentSquare.row + 1, currentSquare.col - 1);
                const pieceOnSquare = board.getPiece(possibleMove);

                if (!!pieceOnSquare && pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
            }

            return availableMoves;
        } else {
            if (currentSquare.row - 1 >= 0) {
                let square: Square = new Square(currentSquare.row - 1, currentSquare.col);
                if (board.getPiece(square) === undefined) {
                    availableMoves.push(square);

                    if (this.didFirstMove === false) {
                        let square: Square = new Square(currentSquare.row - 2, currentSquare.col);
                        if (board.getPiece(square) === undefined) {
                            availableMoves.push(square);
                        }
                    }
                }
            }

            if (currentSquare.row - 1 >= 0 && currentSquare.col + 1 < 8) {
                let possibleMove: Square = new Square(currentSquare.row - 1, currentSquare.col + 1);
                const pieceOnSquare = board.getPiece(possibleMove);

                if (!!pieceOnSquare && pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
            }

            if (currentSquare.row - 1 >= 0 && currentSquare.col - 1 >= 0) {
                let possibleMove: Square = new Square(currentSquare.row - 1, currentSquare.col - 1);
                const pieceOnSquare = board.getPiece(possibleMove);

                if (!!pieceOnSquare && pieceOnSquare.player !== this.player && !(pieceOnSquare instanceof King)) {
                    availableMoves.push(possibleMove);
                }
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
