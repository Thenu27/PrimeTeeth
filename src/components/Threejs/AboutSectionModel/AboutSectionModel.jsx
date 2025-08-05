import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';


const AboutSectionModel=()=>{

    // const model = useGLTF('/tooth.glb')
    const model = useGLTF('/tooth.glb');
    const  shieldRef = useRef(null)
    
    useFrame((state,delta)=>{
    if (shieldRef.current) {
      shieldRef.current.rotation.y += delta * 0.5; // Rotate on Y axis
    }    })

    return(
        <>
          <primitive position={[0,2.5,-1]} rotation={[0,-1.4,0]} ref={shieldRef} object={model.scene}/>
        </>
    )
}

export default AboutSectionModel