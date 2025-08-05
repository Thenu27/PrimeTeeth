import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const StarModel=()=>{

    const starmodelRef = useRef();
    const starmodel = useGLTF('./star.glb');

    useFrame((state,delta)=>{
        starmodelRef.current.rotation.y +=0.5 * delta
    })

    return(
        <>
            <primitive ref={starmodelRef} scale={1.2} object={starmodel.scene}/>      
        </>
    )
}

export default StarModel