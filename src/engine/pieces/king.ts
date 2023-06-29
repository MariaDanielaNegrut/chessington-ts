import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = [];


        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (!(i === 0 && j === 0)) {
                    if (currentSquare.row + i >= 0 && currentSquare.row + i < 8 && currentSquare.col + j < 8 &&
                    currentSquare.col + j >= 0) {
                        availableMoves.push(Square.at(currentSquare.row + i, currentSquare.col + j));
                    }
                }
            }
        }

        return availableMoves;
    }
}
