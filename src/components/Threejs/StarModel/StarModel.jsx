import { useGLTF } from "@react-three/drei"

const StarModel=()=>{

    const starmodel = useGLTF('./star.glb')

    return(
        <>
            <primitive object={starmodel.scene}/>      
        </>
    )
}

export default StarModel