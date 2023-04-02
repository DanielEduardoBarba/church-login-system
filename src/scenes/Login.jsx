import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { fetchSignInMethodsForEmail } from "firebase/auth"
import { API_URL, firebaseConfig } from "../resources.js"


export default function Login({setUserID}) {
        const [email,setEmail]=useState("")
        const [phone,setPhone]=useState("")
        const [password,setPassword]=useState("")

        const [isUser,setIsUser]=useState(false)
        

    const loginUser = (e) =>{
        e.preventDefault()
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)


        console.log(email)
        console.log(phone)
        console.log(password)

        signInWithEmailAndPassword(auth,email, password)
        .then(_user=>{
            setUserID(_user.user.uid)
            console.log(_user)
        })

    }
    const checkUser = (e) =>{
        e.preventDefault()

       const app = initializeApp(firebaseConfig)
       const auth = getAuth(app)

       if(phone){
        // const phoneProvider = new PhoneAuthProvider(auth)

        // phoneProvider.verifyPhoneNumber(phone)
        // .then(response=>{
        //     console.log(response)
        // })
       }

       
       if(email) fetchSignInMethodsForEmail(auth, email)
       .then(methods=>{
        if(methods.length>0){
            setIsUser(true)
        }
        else{
            setIsUser(false)
        }
       })

        
    }

    return (
        <>

            <form id="login-form" className="login-form" onSubmit={e=>isUser?loginUser(e):checkUser(e)}>

                <label>Email</label>

                <input name="email" id="email" placeholder="Email" 
                 disabled={phone?true:false}
                onChange={e => {
                    setEmail(e.target.value)
                }} />

                <label>Phone</label>
                <input name="phone" id="phone" placeholder="(---) --- ---"
                disabled={email?true:false}
                    onChange={e => {
                        if (e.target.value >= 0) {
                            setPhone(e.target.value)
                        }
                        else document.getElementById("phone").value = e.target.value.substring(0, e.target.value.length - 1)
                     }} />

                {/* <select name="frequency" id="frequency" onChange={e => {
                 
                }}>
                    <option value="">Statement Frequency</option>
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                  <option value="seconds">Seconds</option> 
                </select> */}

                { isUser?<label>Password</label>:""}
                {
                isUser
                    ?<input name="password" id="password" placeholder="password" type="password"
                             onChange={e => {
                                setPassword(e.target.value)
                            }} />
                    :""
                }
                <button>{isUser?"Login":"Find Parent"}</button>
            </form>



        </>
    )
}