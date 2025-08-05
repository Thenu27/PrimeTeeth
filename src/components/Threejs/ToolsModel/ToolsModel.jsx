import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const ToolsModel=()=>{

    const DentalTools = useGLTF('./DentalTools1.glb')
    const modelRef = useRef(null)

    useFrame((state,delta)=>{
        modelRef.current.rotation.y += 0.5 * delta
    })

    return(
        <>
            <primitive position={[0,-0.6,-0.2]} rotation={[0,0,0]} scale={1.4} ref={modelRef} object={DentalTools.scene}/>      
        </>
    )
}

export default ToolsModel