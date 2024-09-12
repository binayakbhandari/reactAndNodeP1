import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function SingleProduct() {
    const { id } = useParams()
    const [person,setPerson] = useState({})
    const navigate = useNavigate()
    const fetchPerson = async () => {
        const response = await axios.get("https://66dc946947d749b72acbfa21.mockapi.io/persons/" + id)
        console.log(response)
        if(response.status === 200){
            setPerson(response.data)
        }
    }

    const deletePerson = async ()=>{
        const response = await axios.delete("https://66dc946947d749b72acbfa21.mockapi.io/persons/" + id)
        console.log(response)
        if(response.status === 200){
            navigate('/')
        }else{
            alert("Fail to delete the file !")
        }
    }

    useEffect(() => {
        fetchPerson()
    },[])
    return (
        <>


        </>
    )
}

export default SingleProduct