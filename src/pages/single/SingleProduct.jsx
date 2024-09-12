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
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={person.personImage} alt="Product Image" />
                            </div>
                            <div className="flex flex-wrap gap-2 -mx-2 mb-4">
                                <div className="w-1/2 px-2 ">
                                    <Link to="">
                                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add friend</button>
                                    </Link>
                                </div>
                                <div className="w-1/2 px-2">
                                    <Link to="/edit">
                                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Edit Details</button>
                                    </Link>
                                </div>
                                <div className="w-1/2 px-2">
                                    <Link to="/edit">
                                        <button onClick={deletePerson} className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Delete Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{person.personName}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {person.personDescription}
                            </p>
                            <div className="flex flex-col mb-4">
                                <div className="mr-4 mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Age: </span>
                                    <span className="text-gray-600 font-semibold text-sm dark:text-gray-300">{person.personAge}</span>
                                </div>
                                <div className="mr-4 mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Marital Status: </span>
                                    <span className="text-gray-600 font-semibold text-sm dark:text-gray-300">Single</span>
                                </div>
                                <div className="mr-4 mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Profession: </span>
                                    <span className="text-gray-600 font-semibold text-sm dark:text-gray-300">{person.personProfession}</span>
                                </div>
                                <div className="mr-4 mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Hobbies: </span>
                                    <span className="text-gray-600 font-semibold text-sm dark:text-gray-300">{person.personHobbies}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Skills:</span>
                                <div className="flex flex-wrap gap-2 items-center mt-2">
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">Tailwind CSS</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">ReactJS</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">NodeJS</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">GitHub</button>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Short Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                    lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                    ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                    sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleProduct