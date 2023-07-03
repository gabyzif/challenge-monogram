'use client';
import React, { useEffect, useRef } from 'react';
import Computer from './Computer';
import './JavascriptSection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const JavascriptSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;

    gsap.to(sectionElement, {
      opacity: 0,
      scrollTrigger: {
        trigger: sectionElement,
        start: 'top 5%',
        end: 'bottom 5%',
        scrub: true
      }
    });
  }, []);

  return (
    <>
      <div className="relative m-auto">
        <div
          className="sectionBackground m-auto mx-[2rem] h-[400px] py-10 lg:mx-[3.25rem] lg:h-[900px]"
          ref={sectionRef}
          style={{ opacity: 1, transform: 'translateY(0)' }}
        >
          <div className="m-auto mb-5 text-center lg:mb-20 lg:w-2/4">
            <h2 className="title mb-5 text-white">javascript</h2>
            <p className="subtitle px-10 text-white lg:px-20">
              Statically generated pages are brought to life with client-side JavaScript libraries and
              frameworks, such as Algolia and Next.js.
            </p>
          </div>
        </div>
        <Computer />
      </div>
      <svg>
        <defs>
          <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
            <path d="M0.00071 0.15579C0.00197 0.07826 0.00151 0.04363 0.0123 0.03537C0.02311 0.0271 0.04295 0.0271 0.08591 0.0271H0.91409C0.95705 0.0271 0.97689 0.0271 0.9877 0.03537C0.99849 0.04363 0.99803 0.07826 0.99929 0.15579L1 0.96629C1 1.00457 1 1.03074 0.99257 1.03901C0.98514 1.04728 0.95968 1.04728 0.8426 1.04728H0.1574C0.04032 1.04728 0.01486 1.04728 0.00743 1.03901C0 1.03074 0 1.00457 0 0.96629L0.00071 0.15579Z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default JavascriptSection;
