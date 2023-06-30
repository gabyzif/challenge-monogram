'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin

import HeroGraphics from '../HeroGraphics';
import './hero.css';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: 'top top',
        scrub: 0.5 // Adjust the scrub value here
      }
    });

    tl.to('#rec', {
      duration: 0.1,
      ease: 'none',
      motionPath: {
        path: '#path',
        align: '#path',
        autoRotate: false,
        alignOrigin: [0.1, 0.1]
      }
    }).pause(0.001);
  }, []);

  return (
    <div className="pl-[2rem] lg:pl-[7.25rem]" ref={containerRef}>
      <h1 className="title mb-5 lg:mb-10">
        jamstack <span className="textWithImage">101</span>
      </h1>
      <div className="flex">
        <div className="w-6/12">
          <p className="subtitle mb-[40px] ml-[1rem] text-secondary lg:mb-[100px] lg:ml-[3.87rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc
            viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
          </p>
          <div>
            <svg
              width="300"
              height="582"
              viewBox="0 0 300 582"
              fill="none"
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.6959 38.4653L37.1224 35.5483C41.8873 31.4917 42.4069 24.4008 38.396 19.6894L29.6448 9.40997C25.5882 4.64502 18.5509 4.07988 13.7859 8.13641L10.3595 11.0535C5.64804 15.0644 5.02936 22.1474 9.08589 26.9123L17.8371 37.1918C21.848 41.9032 28.9845 42.4763 33.6959 38.4653ZM26.4033 29.8991C25.5828 28.9354 25.7478 27.5022 26.658 26.7273C27.6217 25.9069 29.0093 26.0184 29.8298 26.9821L31.2883 28.6953C32.1087 29.659 31.9973 31.0466 31.0336 31.8671C30.1234 32.6419 28.6822 32.5761 27.8618 31.6124L26.4033 29.8991Z"
                fill="#151515"
                id="rec"
              />

              <path
                fill="none"
                stroke="#151515"
                strokeMiterlimit="10"
                id="path"
                d="M47.8 545.29l11 .94.16-9.81-.5 9.53c-42.53-48.91-54.38-91.4-57.2-121.58-12.22-130.53 128.06-206.9 107.76-328.82C101.88 52.65 77.6 20.61 58.36.34"
              />
            </svg>
          </div>
        </div>
        <div className="mt-[-100px] overflow-hidden">
          <HeroGraphics image1="/images/hero-rectangle.png" image2="/images/hero-rectangle-2.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
