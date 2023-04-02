import { useState, useEffect } from "react"
import { API_URL } from "../resources"
import Child from "../components/Child"


export default function ChildList({userID, setUserID}){
    const [children, setChildren] = useState("")
    const [selected, setSelected] = useState("")
    const [showOptions, setShowOptions] = useState(false)

    useEffect(()=>{

        setSelected([])
        console.log("WHAT IS SELECTED: ", selected)

        fetch(`${API_URL}/children/${userID}`)
        .then(incoming=>incoming.json())
        .then(response=>{
            setChildren(response)
            console.log(response)
        })
        .catch(console.error)


    },[])
    useEffect(()=>{
        console.log("OKAY", selected.length)
        if(selected.length>0)setShowOptions(true)
        else setShowOptions(false)

    },[selected])


    const signIn = () =>{

        fetch(`${API_URL}/children/${userID}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(selected)
        })
        .then(incoming=>incoming.json())
        .then(response=>{
            console.log(response)
        })
        .catch(console.error)

    }


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
                ?children.map(child=><Child key={child._id} child={child} selected={selected} setSelected={setSelected}/>)
                :""
        }

       {
        showOptions
         ?<button onClick={signIn}>Sign In Children</button>
         :""
       } 
        <button onClick={signIn}>Exit</button>

        </div>

        </>
    )
}