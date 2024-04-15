import React, { useEffect, useRef, useState } from 'react';
import { useKeyPressEvent } from 'react-use';
import headImageSrc from './assets/Head.png';

const box = 20;
const canvasSize = 400;


const Snake: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const snake = useRef<{ x: number; y: number }[]>([{ x: 10 * box, y: 10 * box }]);
  const food = useRef<{ x: number; y: number }>({
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
  });
  const d = useRef<string | undefined>();

  useKeyPressEvent('ArrowUp', () => { d.current = 'UP'; });
  useKeyPressEvent('ArrowDown', () => { d.current = 'DOWN'; });
  useKeyPressEvent('ArrowLeft', () => { d.current = 'LEFT'; });
  useKeyPressEvent('ArrowRight', () => { d.current = 'RIGHT'; });

  const resetGame = () => {
    snake.current = [{ x: 10 * box, y: 10 * box }];
    food.current = {
      x: Math.floor(Math.random() * 15 + 1) * box,
      y: Math.floor(Math.random() * 15 + 1) * box,
    };
    d.current = undefined;
    setGameOver(false);
  };


  useEffect(() => {
    if (gameOver) return;

    const context = canvasRef.current?.getContext('2d');

    const headImage = new Image();
    headImage.src = headImageSrc;

    headImage.onerror = () => {
      console.error('Error loading image');
    };
  
    headImage.onload = () => {
    const interval = setInterval(() => {
      if (!context || !canvasRef.current) return;

      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      for (let i = 0; i < snake.current.length; i++) {
        if (i == 0) {
          const scale = 2;
          context.drawImage(headImage, snake.current[i].x, snake.current[i].y, box * scale, box * scale);
        } else {
          context.fillStyle = "green";
          context.fillRect(snake.current[i].x, snake.current[i].y, box, box);
        }
        //context.fillStyle = (i === 0) ? 'green' : 'white';
        //context.fillRect(snake.current[i].x, snake.current[i].y, box, box);

        //TODO:Should check if snake collides with itself and end game but it ends the game whenever the snake eats
        for (let j = 1; j < snake.current.length; j++) {
          if (snake.current[i].x === snake.current[j].x && snake.current[i].y === snake.current[j].y) {
            //clearInterval(interval);
            //setGameOver(true);
          }
        }
      }

      context.fillStyle = 'red';
      context.fillRect(food.current.x, food.current.y, box, box);

      let snakeX = snake.current[0].x;
      let snakeY = snake.current[0].y;

      if (d.current === 'LEFT') snakeX -= box;
      if (d.current === 'UP') snakeY -= box;
      if (d.current === 'RIGHT') snakeX += box;
      if (d.current === 'DOWN') snakeY += box;

      if (snakeX < 0 || snakeY < 0 || snakeX >= canvasSize || snakeY >= canvasSize) {
        clearInterval(interval);
        setGameOver(true);
      }

      const newHead = { x: snakeX, y: snakeY };

      if (snakeX === food.current.x && snakeY === food.current.y) {
        // Generate new food position
        food.current = {
          x: Math.floor(Math.random() * 15 + 1) * box,
          y: Math.floor(Math.random() * 15 + 1) * box,
        };
        // Add new segment to snake's body
        //snake.current.unshift(newHead);
      } else {
        // Remove last segment from snake's body
        snake.current.pop();
      }

      snake.current.unshift(newHead);
    }, 100);
  

    return () => clearInterval(interval);
  }
  }, [gameOver]);


  return (
    <div style={{ backgroundColor: 'black', width: canvasSize, height: canvasSize, position: 'relative' }}>
      <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
      {gameOver && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <button onClick={resetGame} style={{ fontSize: '20px' }}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default Snake;