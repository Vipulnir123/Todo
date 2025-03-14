import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelWithAnimation from "./ModelWithAnimation";

const Scene = () => {
  // ✅ Independent animation state for each model
  const [model1Animation, setModel1Animation] = useState("Idle");
  const [model2Animation, setModel2Animation] = useState("Walk");
  const [model3Animation, setModel3Animation] = useState("Run");

  return (
    <>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 3]} intensity={1} />

        <Suspense fallback={null}>
          {/* ✅ Each model uses a separate GLB file */}
          <ModelWithAnimation url="/models/model1.glb" position={[-2, 0, 0]} animationName={model1Animation} />
          <ModelWithAnimation url="/models/model2.glb" position={[0, 0, 0]} animationName={model2Animation} />
          <ModelWithAnimation url="/models/model3.glb" position={[2, 0, 0]} animationName={model3Animation} />
        </Suspense>

        <OrbitControls />
      </Canvas>

      {/* ✅ Buttons to control animations separately */}
      <div style={{ position: "absolute", top: 20, left: 20, background: "#fff", padding: 10, borderRadius: 5 }}>
        <h3>Change Animation</h3>

        <div>
          <strong>Model 1:</strong>
          {["Idle", "Walk", "Run"].map((anim) => (
            <button key={anim} onClick={() => setModel1Animation(anim)} style={{ margin: 5 }}>
              {anim}
            </button>
          ))}
        </div>

        <div>
          <strong>Model 2:</strong>
          {["Idle", "Walk", "Run"].map((anim) => (
            <button key={anim} onClick={() => setModel2Animation(anim)} style={{ margin: 5 }}>
              {anim}
            </button>
          ))}
        </div>

        <div>
          <strong>Model 3:</strong>
          {["Idle", "Walk", "Run"].map((anim) => (
            <button key={anim} onClick={() => setModel3Animation(anim)} style={{ margin: 5 }}>
              {anim}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Scene />
    </div>
  );
};

export default App;
