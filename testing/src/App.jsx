import "./App.css";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere, Stage } from "@react-three/drei";
import Cube from "./Components/Cube";
import PC from "./Models/Pc.jsx"
import EarthModel from "./Models/Earth.jsx"

function App() {
  return (
    <>
      <div className="basic_container">
        {/* Main frame in white 3d model will be rendered */}
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[2, 4, 5]} />
          <Cube />
        </Canvas>
      </div>


      {/* 3d sphere rendering */}
      <div className="basic_container">
        {/* Main frame in white 3d model will be rendered */}
        <Canvas >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[2,0,2]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#220736"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </div>



      {/* Displaying gltf models ----------- */}

      <div className="basic_container">
        <Canvas camera={{fov:25}}>
          <Stage environment="city" intensity={0.5}>
          <PC/>
          </Stage>
          <OrbitControls enableZoom={false}/>
        </Canvas>
      </div>


      <div className="basic_container">
        <Canvas>
          <Stage environment="city" intensity={0.5}>
          <EarthModel/>
          </Stage>
          <OrbitControls enableZoom={false}/>
        </Canvas>
      </div>
    </>
  );
}

export default App;
