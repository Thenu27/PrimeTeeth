import { Environment, OrbitControls } from '@react-three/drei'
import Lights from '../Lights/Lights'
import './AboutSectionExp.css'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import AboutSectionModel from '../AboutSectionModel/AboutSectionModel'


const AboutSectionExp =()=>{


    return(
        <>
        <Canvas
        shadows
        camera={{
            fov: 75,
            near: 0.1,
            far: 200,
            position: [0, -1, -10],
        }}
        gl={{
            alpha: true,
            outputColorSpace: THREE.SRGBColorSpace,
        }}
        >
                {/* <OrbitControls/> */}
                <Lights/>
                <Environment preset="sunset" />
                < AboutSectionModel/> 
                  {/* <EffectComposer>
                        <Bloom
                        intensity={0.3}               
                        luminanceThreshold={0.9}      
                        luminanceSmoothing={0.05}
                        mipmapBlur/>  
                </EffectComposer> */}
        </Canvas>


        </>
    )
}

export default AboutSectionExp