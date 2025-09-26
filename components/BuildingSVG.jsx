import React from "react";
import { motion } from "framer-motion";

const BuildingSVG = ({ progress = 100 }) => {
    // ==== Theme Colors ====
    const outlineStaticColor = "white";
    const outlineAnimatedColor = "#38b6ff"; // nestlink blue
    const circuitLineColor = "#00FF66"; // bright green signal
    const windowColor = "#d6ebf6";

    const glowColorOutline = outlineAnimatedColor;
    const glowColorCircuit = circuitLineColor;

    // ==== Helpers ====
    const getPathLength = (pathD) => {
        try {
            if (typeof document !== "undefined") {
                const tempPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                tempPath.setAttribute("d", pathD);
                return tempPath.getTotalLength();
            }
        } catch (e) { }
        return 100;
    };

    const calculateDashOffset = (length, prog) => length - (prog / 100) * length;

    // ==== Building Shapes ====
    const building1Path = "M100 250 L100 80 L150 40 L200 80 L200 250 Z";
    const building2Path = "M40 250 L40 160 L80 130 L120 160 L120 250 Z";
    const building3Path = "M180 250 L180 150 L220 120 L260 150 L260 250 Z";
    const building4Path = "M0 250 L0 200 L30 180 L60 200 L60 250 Z";

    const windowPaths = [
        "M110 230 H130 V210 H110 Z",
        "M150 230 H170 V210 H150 Z",
        "M110 190 H130 V170 H110 Z",
        "M150 190 H170 V170 H150 Z",
        "M130 140 H150 V120 H130 Z",
        "M50 230 H70 V210 H50 Z",
        "M90 230 H110 V210 H90 Z",
        "M190 230 H210 V210 H190 Z",
        "M230 230 H250 V210 H230 Z",
    ];

    // ==== Circuit Paths ====
    const circuitPaths = [
        "M140 240 L140 180 C130 170, 150 170, 140 160 S130 140, 140 130 L140 90",
        "M110 220 L130 200 C140 190, 160 190, 170 200 L190 220",
        "M170 240 L170 190 C180 180, 190 180, 190 170 S180 160, 170 150",
        "M120 200 C110 210, 90 220, 70 230",
        "M80 150 L90 140 L100 150 L110 140",
        "M70 240 L70 200 C60 190, 80 190, 70 180 S60 170, 70 160",
        "M50 220 L70 210 L90 220 L110 210",
        "M200 200 C210 210, 230 220, 250 230",
        "M210 240 L210 200 C200 190, 220 190, 210 180 S200 170, 210 160",
        "M190 220 L210 210 L230 220 L250 210",
    ];

    // ==== Circuit Nodes ====
    const nodes = [
        { cx: 140, cy: 90, delay: 0.6 },
        { cx: 190, cy: 220, delay: 0.8 },
        { cx: 70, cy: 160, delay: 1.0 },
        { cx: 210, cy: 160, delay: 1.2 },
        { cx: 60, cy: 160, delay: 1.4 },
        { cx: 70, cy: 230, delay: 1.6 },
        { cx: 220, cy: 160, delay: 1.8 },
        { cx: 250, cy: 230, delay: 2.0 },
        { cx: 280, cy: 70, delay: 2.2 },
        { cx: 290, cy: 140, delay: 2.4 },
        { cx: 20, cy: 110, delay: 2.6 },
        { cx: 10, cy: 190, delay: 3.0 },
        { cx: 140, cy: 130, delay: 0.7 },
        { cx: 170, cy: 150, delay: 0.9 },
        { cx: 120, cy: 160, delay: 1.1 },
    ];

    // ==== Stars ====
    const starPath = (cx, cy, spikes = 5, outer = 8, inner = 4) => {
        let rot = -Math.PI / 2;
        const step = Math.PI / spikes;
        let path = "";
        for (let i = 0; i < spikes; i++) {
            const outerX = cx + Math.cos(rot) * outer;
            const outerY = cy + Math.sin(rot) * outer;
            if (i === 0) path += `M ${outerX} ${outerY} `;
            else path += `L ${outerX} ${outerY} `;
            rot += step;
            const innerX = cx + Math.cos(rot) * inner;
            const innerY = cy + Math.sin(rot) * inner;
            path += `L ${innerX} ${innerY} `;
            rot += step;
        }
        path += "Z";
        return path;
    };

    const stars = [
        { d: starPath(150, 18, 5, 9, 4), delay: 0.15 },
        { d: starPath(130, 32, 5, 7, 3.5), delay: 0.25 },
        { d: starPath(170, 32, 5, 7, 3.5), delay: 0.35 },
    ];

    const traceDuration = 3.0;
    const buildPaths = [building1Path, building2Path, building3Path, building4Path];

    return (
        <svg
            width="200"
            height="200"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2"
        >
            {/* ==== Static Outlines ==== */}
            {buildPaths.map((d, i) => (
                <path
                    key={`b-static-${i}`}
                    d={d}
                    stroke={outlineStaticColor}
                    strokeWidth="3"
                    opacity="0.2"
                />
            ))}

            {/* ==== Windows ==== */}
            {windowPaths.map((d, i) => (
                <path key={`w-${i}`} d={d} fill={windowColor} opacity="0.8" />
            ))}

            {/* ==== Building Trace + Glow ==== */}
            {buildPaths.map((d, i) => {
                const length = getPathLength(d);
                const offset = calculateDashOffset(length, progress);
                return (
                    <g key={`b-${i}`}>
                        <motion.path
                            d={d}
                            stroke={outlineAnimatedColor}
                            strokeWidth="3"
                            fill="transparent"
                            strokeDasharray={length}
                            strokeDashoffset={length}
                            strokeLinecap="round"
                            style={{ filter: `drop-shadow(0 0 10px ${glowColorOutline})` }}
                            initial={{ strokeDashoffset: length }}
                            animate={{ strokeDashoffset: offset }}
                            transition={{ duration: traceDuration, ease: "easeInOut", delay: i * 0.6 }}
                        />
                        <motion.path
                            d={d}
                            stroke={outlineAnimatedColor}
                            strokeWidth="4.5"
                            fill="transparent"
                            strokeLinecap="round"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.6 + traceDuration, duration: 0.5 }}
                            style={{ filter: `drop-shadow(0 0 14px ${glowColorOutline})` }}
                        />
                    </g>
                );
            })}

            {/* ==== Circuit Lines with Flow Effect ==== */}
            {circuitPaths.map((d, i) => {
                const length = getPathLength(d);
                return (
                    <motion.path
                        key={`c-${i}`}
                        d={d}
                        stroke={circuitLineColor}
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray={length}
                        strokeDashoffset={0}
                        style={{ filter: `drop-shadow(0 0 5px ${glowColorCircuit})` }}
                        initial={{ strokeDashoffset: length }}
                        animate={{ strokeDashoffset: [length, 0] }}
                        transition={{
                            duration: 2.5,

                            ease: "linear",
                            delay: i * 0.3,
                        }}
                    />
                );
            })}

            {/* ==== Circuit Nodes ==== */}
            {nodes.map((n, i) => (
                <motion.circle
                    key={`n-${i}`}
                    cx={n.cx}
                    cy={n.cy}
                    r="3"
                    fill={circuitLineColor}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: n.delay,
                        duration: 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                    }}
                    style={{ filter: `drop-shadow(0 0 5px ${glowColorCircuit})` }}
                />
            ))}

            {/* ==== Twinkling Stars ==== */}
            {stars.map((s, i) => (
                <motion.path
                    key={`s-${i}`}
                    d={s.d}
                    fill={outlineAnimatedColor}
                    initial={{ opacity: 0.7, scale: 1 }}
                    animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
                    transition={{
                        delay: s.delay,
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{ filter: `drop-shadow(0 0 8px ${glowColorOutline})` }}
                />
            ))}

            {/* ==== NL Text ==== */}
            <motion.text
                x="150"
                y="130"
                textAnchor="middle"
                fill={outlineAnimatedColor}
                fontSize="28"
                fontWeight="bold"
                style={{ filter: ` drop-shadow(0 0 8px ${glowColorOutline})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: traceDuration + 0.8 }}
            >
                NL
            </motion.text>
        </svg>
    );
};

export default BuildingSVG;
