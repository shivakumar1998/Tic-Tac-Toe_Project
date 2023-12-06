import { useState } from "react";
import { initialGameBoard } from "./GameBoard";

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map(innerArray)];
      [...innerArray];
    });
    updatedBoard[rowIndex][colIndex] = "X";
    return updatedBoard;
  }
}
