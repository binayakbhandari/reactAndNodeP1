import Card from "../../components/Card"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-1 flex flex-col justify-center items-center gap-5 mt-5 mx-2 md:flex-row">
                    <Card />
                    <Card />
                    <Card />
                </main>

                <Footer />
                
            </div>
        </>
    )
}

export default Home
