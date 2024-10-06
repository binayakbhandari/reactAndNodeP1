import { Link } from "react-router-dom"

function Card({ person }) {
    const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaM9z2Crf5aEDYpFp1Bj18o3cQ690URe_ow&s"
    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                <div className="flex flex-col items-center pb-10 px-4">
                    <div class="relative">
                    <div
                        class="absolute w-24 h-24 mb-3 rounded-full outline-2 md:outline-2 outline-dashed outline-blue-700 animate-rotating duration-1000 ease-out hover:animate-none cursor-pointer dark:outline-white">
                    </div>
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg cursor-pointer" src={person.personImage === "" ? defaultImage : person.personImage} alt="Profile Image Not Found" />
                    </div>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{person.personName}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{person.personProfession}</span>
                    {/* <div classNameName="mt-2 px-5">
                            <p classNameName="text- text-gray-600 dark:text-gray-500">
                                {person.personDescription}
                            </p>
                        </div> */}
                    
                </div>
            </div>

        </>
    )
}

export default Card
