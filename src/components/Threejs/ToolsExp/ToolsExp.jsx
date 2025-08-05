import { Environment, OrbitControls } from '@react-three/drei'
import Lights from '../Lights/Lights'
import ServiceModel from '../ServiceModel/ServiceModel'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import ToolsModel from '../ToolsModel/ToolsModel'
import './ToolsExp.css'



const ToolsExp =()=>{


    return(
        <>
        <div className='tools-experience'>
        <Canvas
        shadows
        camera={{
            fov: 75,
            near: 0.1,
            far: 200,
            position: [0, 0.5, -4],
        }}
        gl={{
            alpha: true,
            outputColorSpace: THREE.SRGBColorSpace,
        }}
        >
                {/* <OrbitControls/> */}
                <Lights/>
                {/* <Environment preset="sunset" /> */}
                <ToolsModel/> 
                  {/* <EffectComposer>
                        <Bloom
                        intensity={0.3}               
                        luminanceThreshold={0.9}      
                        luminanceSmoothing={0.05}
                        mipmapBlur/>  
                </EffectComposer> */}
        </Canvas>
        </div>


        </>
    )
}

export default ToolsExp