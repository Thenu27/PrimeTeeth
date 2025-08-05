import { Environment, OrbitControls } from '@react-three/drei'
import Lights from '../Lights/Lights'
import ServiceModel from '../ServiceModel/ServiceModel'
import './ServiceModelExp.css'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing';



const ServiceModelExp =()=>{


    return(
        <>
        <div className='experience'>
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
                <ServiceModel/> 
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

export default ServiceModelExp