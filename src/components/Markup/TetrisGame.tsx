'use client';
import React, { useState, useEffect } from 'react';

const Container = () => {
  const [blocks, setBlocks] = useState([]);
  const [landedBlocks, setLandedBlocks] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const containerWidth = 5; // Number of blocks horizontally
  const containerHeight = 10; // Number of blocks vertically
  const blockSizeHeight = 50; // Size of each block in pixels
  const blockSizeWidth = 300; // Size of each block in pixels
  const blockColors = ['#D12510', '#FEC05C', '#0165B1', '#000', '#ccc']; // Different colors for blocks

  // Create a new block with random color
  const createBlock = () => {
    const randomColor = blockColors[Math.floor(Math.random() * blockColors.length)];
    return { x: Math.floor(containerWidth / 2), y: 0, color: randomColor };
  };

  // Move the current block down by one step
  const moveBlockDown = () => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) => {
        if (block.y === containerHeight - 1 || isBlockColliding(block.x, block.y + 1)) {
          // Block has reached the bottom of the container or collided with another block
          setLandedBlocks((prevLandedBlocks) => [...prevLandedBlocks, block]);
          return createBlock(); // Create a new block at the top
        }
        return { ...block, y: block.y + 1 };
      })
    );
  };

  // Check if a block is colliding with the landed blocks
  const isBlockColliding = (x, y) => {
    return landedBlocks.some((landedBlock) => landedBlock.x === x && landedBlock.y === y);
  };

  // Move the current block left or right
  const moveBlockHorizontally = (deltaX) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) => {
        const newX = block.x + deltaX;
        if (newX < 0 || newX >= containerWidth || isBlockColliding(newX, block.y)) {
          // Block is outside the container or colliding with another block, don't move
          return block;
        }
        return { ...block, x: newX };
      })
    );
  };

  // Rotate the current block (not implemented in this example)

  // Start a new game
  const startGame = () => {
    setBlocks([createBlock()]);
    setLandedBlocks([]);
    setIsGameOver(false);
  };

  // Game loop
  useEffect(() => {
    if (!isGameOver) {
      const interval = setInterval(() => {
        moveBlockDown();
      }, 1000); // Move block down every second

      return () => {
        clearInterval(interval);
      };
    }
  }, [isGameOver]);

  // Handle key press events for moving the block
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!isGameOver) {
        if (event.key === 'ArrowLeft') {
          moveBlockHorizontally(-1); // Move block left
        } else if (event.key === 'ArrowRight') {
          moveBlockHorizontally(1); // Move block right
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isGameOver]);

  // Initialize the game when the component mounts
  useEffect(() => {
    startGame();
  }, []);

  // Render the blocks
  const renderBlocks = () => {
    const allBlocks = [...blocks, ...landedBlocks];
    return allBlocks.map((block, index) => (
      <div
        key={index}
        style={{
          position: 'absolute',
          left: block.x * blockSizeWidth,
          top: block.y * blockSizeHeight,
          width: blockSizeWidth,
          height: blockSizeHeight,
          backgroundColor: block.color
        }}
      />
    ));
  };

  return (
    <div>
      <p className="p-10">Move the arrows to play a mini-tetris!</p>
      <div
        style={{
          position: 'relative',
          height: containerHeight * blockSizeHeight,
          margin: '0 auto'
        }}
      >
        {renderBlocks()}
      </div>
      <button style={{ display: isGameOver ? 'block' : 'none' }} onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};

export default Container;
