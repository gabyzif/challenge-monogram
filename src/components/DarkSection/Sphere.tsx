'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Sphere = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let container = containerRef.current;
    let width = container.offsetWidth;
    let height = container.offsetHeight;

    // SETUP SCENE
    const scene = new THREE.Scene();

    // SETUP RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // SETUP lights
    const light1 = new THREE.PointLight(0x5a54ff, 0.75);
    light1.position.set(-150, 150, -50);

    const light2 = new THREE.PointLight(0x4158f6, 0.75);
    light2.position.set(-400, 200, 150);

    const light3 = new THREE.PointLight(0x803bff, 0.7);
    light3.position.set(100, 250, -100);

    scene.add(light1, light2, light3);

    // SETUP GEOMETRY
    // setup halo
    const atmosphereShader = {
      atmosphere: {
        uniforms: {},
        vertexShader: [
          'varying vec3 vNormal;',
          'void main() {',
          'vNormal = normalize( normalMatrix * normal );',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
          '}'
        ].join('\n'),
        fragmentShader: [
          'varying vec3 vNormal;',
          'void main() {',
          'float intensity = pow( 0.99 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 6.0 );',
          'gl_FragColor = vec4( .28, .48, 1.0, 1.0 ) * intensity;',
          '}'
        ].join('\n')
      }
    };
    const atmosphereGeometry = new THREE.SphereGeometry(2, 64, 64);

    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(atmosphereShader['atmosphere'].uniforms),
      vertexShader: atmosphereShader['atmosphere'].vertexShader,
      fragmentShader: atmosphereShader['atmosphere'].fragmentShader,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    const atm = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atm.scale.set(1.05, 1.05, 1.05);
    scene.add(atm);

    atm.position.set(-0.1, 0.1, 0);

    // setup globe
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0xeeeeee
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    scene.add(sphere);

    // SETUP camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 6;

    // ANIMATION LOOP
    const animate = function () {
      requestAnimationFrame(animate);

      if (!isDragging) {
        sphere.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount

    const handleMouseDown = () => {
      setIsDragging(true);
    };

    const handleMouseMove = (e) => {
      const deltaMove = {
        x: e.offsetX - previousMousePosition.x
      };

      if (isDragging) {
        sphere.rotation.y += deltaMove.x * 0.004;
      }

      previousMousePosition.x = e.offsetX;
      previousMousePosition.y = e.offsetY;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <div id="globeCanvas" ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default Sphere;
