'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AboutPhilosophy() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true
        });

        renderer.setSize(400, 400);
        renderer.setClearColor(0x000000, 0);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x4fb2d6, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xff7e50, 1, 100);
        pointLight.position.set(-5, -5, 5);
        scene.add(pointLight);

        // Create a network of interconnected nodes (the "Nest")
        const nodes = [];
        const connections = [];
        const nodeCount = 30;

        // Create nodes
        for (let i = 0; i < nodeCount; i++) {
            const geometry = new THREE.SphereGeometry(0.3, 16, 16);
            const material = new THREE.MeshPhongMaterial({
                color: new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.8, 0.6),
                emissive: new THREE.Color().setHSL(Math.random() * 0.1 + 0.1, 0.8, 0.2),
                specular: new THREE.Color(0xffffff),
                shininess: 50
            });

            const node = new THREE.Mesh(geometry, material);

            // Position nodes in a spherical formation
            const radius = 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            node.position.x = radius * Math.sin(phi) * Math.cos(theta);
            node.position.y = radius * Math.sin(phi) * Math.sin(theta);
            node.position.z = radius * Math.cos(phi);

            scene.add(node);
            nodes.push({
                mesh: node,
                originalPosition: node.position.clone(),
                speed: Math.random() * 0.02 + 0.005,
                angle: Math.random() * Math.PI * 2
            });
        }

        // Create connections between nodes
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                if (Math.random() > 0.7) {
                    const distance = nodes[i].mesh.position.distanceTo(nodes[j].mesh.position);

                    if (distance < 8) {
                        const geometry = new THREE.CylinderGeometry(0.05, 0.05, distance, 8);
                        geometry.rotateZ(Math.PI / 2);
                        const material = new THREE.MeshPhongMaterial({
                            color: new THREE.Color().setHSL(Math.random() * 0.1 + 0.6, 0.8, 0.7),
                            transparent: true,
                            opacity: 0.6
                        });

                        const connection = new THREE.Mesh(geometry, material);

                        // Position the connection between the two nodes
                        connection.position.copy(nodes[i].mesh.position);
                        connection.position.lerp(nodes[j].mesh.position, 0.5);

                        // Orient the connection to point at the second node
                        connection.lookAt(nodes[j].mesh.position);

                        scene.add(connection);
                        connections.push(connection);
                    }
                }
            }
        }

        // Add central core element
        const coreGeometry = new THREE.IcosahedronGeometry(1.5, 2);
        const coreMaterial = new THREE.MeshPhongMaterial({
            color: 0x4fb2d6,
            emissive: 0x1a5276,
            specular: 0xffffff,
            shininess: 100,
            wireframe: false,
            transparent: true,
            opacity: 0.9
        });
        const core = new THREE.Mesh(coreGeometry, coreMaterial);
        scene.add(core);

        // Position camera
        camera.position.z = 12;

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);

            // Animate nodes
            nodes.forEach(node => {
                node.angle += node.speed;
                node.mesh.position.x = node.originalPosition.x + Math.sin(node.angle) * 0.5;
                node.mesh.position.y = node.originalPosition.y + Math.cos(node.angle) * 0.5;
                node.mesh.position.z = node.originalPosition.z + Math.sin(node.angle * 1.5) * 0.3;

                node.mesh.rotation.x += 0.01;
                node.mesh.rotation.y += 0.01;
            });

            // Animate core
            core.rotation.x += 0.005;
            core.rotation.y += 0.008;

            // Pulse core scale
            core.scale.setScalar(1 + Math.sin(Date.now() * 0.002) * 0.1);

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            if (canvasRef.current) {
                const width = Math.min(400, window.innerWidth - 40);
                const height = width;

                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <section className="py-20 px-6 w-4/5 mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* 3D Visualization */}
                <motion.div
                    initial={{ opacity: 0, x: -50, rotateY: 90 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="relative w-full lg:w-2/5 flex justify-center"
                >
                    <div className="relative w-full max-w-md aspect-square">
                        <canvas
                            ref={canvasRef}
                            className="w-full rounded-2xl shadow-2xl"
                            style={{
                                background: 'radial-gradient(circle, rgba(79,178,214,0.1) 0%, rgba(25,25,35,0.2) 100%)',
                                backdropFilter: 'blur(10px)'
                            }}
                        />

                        {/* Animated glow effect */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none z-[-1]"
                            animate={{
                                boxShadow: [
                                    '0 0 20px 5px rgba(79, 178, 214, 0.3)',
                                    '0 0 40px 10px rgba(79, 178, 214, 0.5)',
                                    '0 0 20px 5px rgba(79, 178, 214, 0.3)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full lg:w-3/5 text-left"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -30, rotateX: -10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        The NestLink Philosophy
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed space-y-6"
                    >
                        <p>
                            NestLink was born from a simple yet powerful vision: to empower businesses through intelligent,
                            human-centered digital solutions. Our name embodies our core philosophy—"Nest" represents the
                            foundation we build for growth, collaboration, and security, while "Link" signifies the connections
                            we forge between ideas, technology, and people.
                        </p>

                        <div className="pl-6 border-l-4 border-blue-400 dark:border-blue-600">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Our Mission</h3>
                            <p>
                                To continuously innovate and deliver reliable digital ecosystems that transform how businesses
                                operate and thrive. We're committed to creating solutions that not only solve today's challenges
                                but also anticipate tomorrow's opportunities, ensuring our partners are always one step ahead.
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-orange-400 dark:border-orange-600">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Our Vision</h3>
                            <p>
                                We envision a future where technology serves as a catalyst for creativity, collaboration, and
                                scalable growth. A world where digital solutions feel intuitive, empowering, and human—bridging
                                gaps between ambition and achievement, between concept and reality.
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-teal-400 dark:border-teal-600">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Our Objectives</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Create digital experiences that feel personal, intuitive, and empowering</li>
                                <li>Build scalable solutions that grow alongside our partners' ambitions</li>
                                <li>Foster innovation through collaborative partnerships rather than transactional relationships</li>
                                <li>Deliver measurable results that create lasting impact and tangible value</li>
                                <li>Champion ethical technology that prioritizes privacy, security, and accessibility</li>
                            </ul>
                        </div>

                        <p>
                            Every solution we craft is imbued with purpose and precision, designed not just to meet expectations
                            but to exceed them. We believe technology should feel like magic—seamless, powerful, and transformative—
                            while remaining grounded in practical results and measurable outcomes.
                        </p>

                        <p className="italic text-gray-600 dark:text-gray-400">
                            This is our story. This is our promise. This is NestLink.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}