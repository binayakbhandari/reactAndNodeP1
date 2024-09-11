
function Card() {
    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                        <span className="sr-only">Open dropdown</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center pb-10 px-4">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/457879708_2132613733787818_4224658857756710253_n.jpg?ccb=11-4&oh=01_Q5AaIDor49d-OENI5_eLa3JzXXPJArMRpYJZWhGnq1QmX1hy&oe=66EC6509&_nc_sid=5e03e0&_nc_cat=100    " alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Binayak Bhandari</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Web Developer</span>
                    <div classNameName="mt-2 px-5">
                        <p classNameName="text- text-gray-600 dark:text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adicing elit. Nesciunt consequuntur accusantium facere, placeat ipsam quam.
                        </p>
                    </div>
                    <div className="flex mt-6 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                        <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit Details</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
