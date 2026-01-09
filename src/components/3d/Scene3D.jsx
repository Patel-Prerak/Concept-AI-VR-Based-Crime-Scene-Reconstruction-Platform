import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Environment, Text, Html } from '@react-three/drei';
import { useState } from 'react';

const EvidenceMarker = ({ position, label, type, onClick, isSelected }) => {
    const [hovered, setHovered] = useState(false);

    const colors = {
        BLOOD: "#ff003c",
        WEAPON: "#ffd700",
        FIBER: "#00f0ff",
        IMPACT: "#7000ff"
    };

    return (
        <group position={position}>
            <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[0, 0.5, 0]}
            >
                <octahedronGeometry args={[0.3, 0]} />
                <meshStandardMaterial
                    color={colors[type] || "#ffffff"}
                    emissive={colors[type] || "#ffffff"}
                    emissiveIntensity={isSelected || hovered ? 2 : 0.5}
                    wireframe={!isSelected && !hovered}
                />
            </mesh>

            {/* Connector Line */}
            <mesh position={[0, -0.25, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 0.5]} />
                <meshBasicMaterial color={colors[type] || "#ffffff"} opacity={0.5} transparent />
            </mesh>

            {/* Floating Label */}
            {(hovered || isSelected) && (
                <Html position={[0, 1, 0]}>
                    <div className="bg-black/80 text-white text-xs px-2 py-1 rounded border border-white/20 whitespace-nowrap backdrop-blur-sm">
                        <span style={{ color: colors[type] }}>●</span> {label}
                    </div>
                </Html>
            )}
        </group>
    );
};

const Scene3D = ({ evidence = [], onSelectEvidence }) => {
    const [selectedId, setSelectedId] = useState(null);

    const handleSelect = (id) => {
        setSelectedId(id);
        if (onSelectEvidence) onSelectEvidence(id);
    };

    return (
        <div className="w-full h-full bg-black relative rounded-xl overflow-hidden border border-white/10">
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur text-xs font-mono text-primary border border-primary/30 rounded">
                VR RECONSTRUCTION MODE // ACTIVE
            </div>

            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />

                <Grid infiniteGrid fadeDistance={30} sectionColor="#4d4d4d" cellColor="#222" />

                {evidence.map((item) => (
                    <EvidenceMarker
                        key={item.id}
                        {...item}
                        position={[item.x, item.y, item.z]}
                        isSelected={selectedId === item.id}
                        onClick={(e) => { e.stopPropagation(); handleSelect(item.id); }}
                    />
                ))}

                <OrbitControls makeDefault />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default Scene3D;
