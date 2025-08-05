import { useGLTF } from '@react-three/drei';
// import './Model.css';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';


const ServiceModel=()=>{

    // const model = useGLTF('/tooth.glb')
    const model = useGLTF('/sheild7.glb');
    const  shieldRef = useRef(null)
    
    useFrame((state,delta)=>{
    if (shieldRef.current) {
      shieldRef.current.rotation.y += delta * 0.5; // Rotate on Y axis
    }    })

    return(
        <>
          <primitive rotation={[0,-1.4,0]} ref={shieldRef} object={model.scene}/>
        </>
    )
}

export default ServiceModel