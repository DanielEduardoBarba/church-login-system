import { useState } from "react"


export default function Child({ child, IDs, setIDs, names, setNames }){
    const [isSelected, setIsSelected] =useState(false)
    const {_id,name,dob,allergies} = child

    const toggleSelect = ()=>{
        
        
        if(!IDs.includes(_id)){
            IDs.push(_id)
            setIDs(IDs)
            
            names.push(name)
            setNames(names)

            setIsSelected(true)
            
            //document.getElementById("child").style.backgroundColor="grey"
        }
        else{
            let newIDs = []
            let newNames = []
            for(let i=0;i<IDs.length;i++){
                if(IDs[i]!=_id){
                    newIDs.push(IDs[i])
                    newNames.push(names[i])
                }
            }
            setIDs(newIDs)
            setNames(newNames)
            
            setIsSelected(false)
            // document.getElementById("child").style.backgroundColor="white"
        }
        console.log(IDs,"Comparing",names)
        
    }

    return(
        <>
            <div 
            style={{
               // backgroundColor: isSelected?"grey":"wheat"
               boxShadow:isSelected?"0px 0px 30px 3px #000000":"",
              border:isSelected?"5px solid #ff0000":"5px solid wheat"
            }}
            id="child"
            className="child"
            onClick={toggleSelect}
            >
                <p>{name}</p>
                <p>{dob}</p>
                <p>{allergies?allergies:"-none-"}</p>
                {/* <p>{_id}</p> */}

                {/* <button 
                id="child-btn"
                className="child-btn"
                onClick={toggleSelect}></button> */}
            </div>
        </>
    )
}