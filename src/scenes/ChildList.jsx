import { useState, useEffect } from "react"
import { API_URL } from "../resources"
import Child from "../components/Child"


export default function ChildList({userID, setUserID}){
    const [children, setChildren] = useState("")
    const [selected, setSelected] = useState([""])
    useEffect(()=>{
        fetch(`${API_URL}/children/${userID}`)
        .then(incoming=>incoming.json())
        .then(response=>{
            setChildren(response)
            console.log(response)
        })
        .catch(console.error)

    },[])


    return(
        <>

        <div className="child-list">
        <div className="child">
                <p>Name</p>
                <p>Birthday</p>
                <p>Alergies</p>
                <p>ID</p>
            </div>

        {
            children
                ?children.map(child=><Child child={child} selected={selected} setSelected={setSelected}/>)
                :""
        }

        </div>

        </>
    )
}