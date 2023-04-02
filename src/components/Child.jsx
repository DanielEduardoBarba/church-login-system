import { useState } from "react"


export default function Child({ child, selected, setSelected }){
    const [isSelected, setIsSelected] =useState(false)
    const {_id,name,dob,allergies} = child

    const toggleSelect = ()=>{
            
        if(!selected.includes(_id)){
            selected.push(_id)
            setSelected(selected)
            setIsSelected(true)
            //document.getElementById("child").style.backgroundColor="grey"
        }
        else{
            let newList = []
            for(let i=0;i<selected.length;i++){
                if(selected[i]!=_id)newList.push(selected[i])
            }
            setSelected(newList)
            setIsSelected(false)
           // document.getElementById("child").style.backgroundColor="white"
        }
       
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
                <p>{allergies}</p>
                <p>{_id}</p>

                {/* <button 
                id="child-btn"
                className="child-btn"
                onClick={toggleSelect}></button> */}
            </div>
        </>
    )
}