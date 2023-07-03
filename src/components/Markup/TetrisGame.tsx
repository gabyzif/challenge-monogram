'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const TetrisGame = () => {
  const containerRef = useRef(null);

  const addRectangles = () => {
    const rectConfigurations = [
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 },
      { width: 320, height: 57, rx: 7 }
    ];

    const container = containerRef.current;

    // Calculate the number of lines and spacing between them
    const numLines = 3;
    const lineHeight = rectConfigurations[0].height;
    const spacing = 10;
    const totalHeight = numLines * lineHeight + (numLines - 1) * spacing;

    // Calculate the available width for blocks
    const availableWidth = 1512;

    // Calculate the maximum number of blocks that can fit in a line
    const maxBlocksPerLine = Math.floor(availableWidth / rectConfigurations[0].width);

    // Calculate the spacing between blocks within a line
    const blockSpacing =
      (availableWidth - maxBlocksPerLine * rectConfigurations[0].width) / (maxBlocksPerLine - 1);

    // Calculate the starting Y position for the first line
    const startY = -totalHeight;

    rectConfigurations.forEach((rectConfig, index) => {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const lineIndex = Math.floor(index / maxBlocksPerLine);
      const x = (index % maxBlocksPerLine) * (rectConfig.width + blockSpacing);
      const y = startY + lineIndex * (lineHeight + spacing);

      rect.setAttribute('x', x);
      rect.setAttribute('y', y);
      rect.setAttribute('width', rectConfig.width);
      rect.setAttribute('height', rectConfig.height);
      rect.setAttribute('rx', rectConfig.rx);
      rect.setAttribute('fill', getRandomColor());
      rect.setAttribute('opacity', getRandomOpacity());

      container.appendChild(rect);

      gsap.from(rect, {
        y: y,
        duration: 1,
        ease: 'power2.out',
        opacity: 0
      });

      if (index === rectConfigurations.length - 1) {
        ScrollTrigger.create({
          trigger: rect,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            if (self.direction === -1 && self.progress === 0) {
              container.removeChild(rect);
            }
          }
        });
      }
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.addEventListener('refreshInit', addRectangles);
    ScrollTrigger.addEventListener('scrollEnd', addRectangles);

    return () => {
      ScrollTrigger.removeEventListener('refreshInit', addRectangles);
      ScrollTrigger.removeEventListener('scrollEnd', addRectangles);
    };
  }, []);

  const getRandomColor = () => {
    const colors = ['#D12510', '#97B1B2', '#FEC05C', '#0165B1', 'black'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomOpacity = () => {
    return Math.random() * 0.4 + 0.2;
  };

  return (
    <svg
      ref={containerRef}
      width="1512"
      height="228"
      viewBox="0 0 1512 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  );
};

export default TetrisGame;
