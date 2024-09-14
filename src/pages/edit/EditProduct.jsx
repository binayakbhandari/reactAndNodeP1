import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Form from "../../components/Form"
import Navbar from "../../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"


function EditProduct(){
    const [person, setPerson] = useState({})
    const {id} = useParams()
    const fetchPerson = async ()=>{
        const response = await axios.get("https://66dc946947d749b72acbfa21.mockapi.io/persons/" + id)
        console.log(response)
        if(response.status === 200){
            setPerson(response.data)
        }
    }
    useEffect(()=>{
        fetchPerson()
    },[])

    return(
        <>
        <Navbar />

        <Form type="edit" person={person} />

        <Footer />
        </>
    )
}

export default EditProduct