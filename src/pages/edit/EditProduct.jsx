import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Form from "../../components/Form"
import Navbar from "../../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"


function EditProduct(){
    const {id} = useParams()

    return(
        <>
        <Navbar />

        <Form type="edit" id={id} />

        <Footer />
        </>
    )
}

export default EditProduct