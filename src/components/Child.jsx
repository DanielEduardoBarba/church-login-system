


export default function Child({ child, selected, setSelected }){

    const {_id,name,dob,allergies} = child

    return(
        <>
            <div className="child">
                <p>{name}</p>
                <p>{dob}</p>
                <p>{allergies}</p>
                <p>{_id}</p>
                <button 
                style={{
                    backgroundColor:selected.includes(_id)?"red":"green"
                }}
                 onClick={()=>{
                    
                    if(!selected.includes(_id)){
                        selected.push(_id)
                        setSelected(selected)
                    }
                   
                }}></button>
            </div>
        </>
    )
}