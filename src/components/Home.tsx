import bg1 from "../assets/bg1.png"

export default function Home(){
    return(
        <div>
            <div
                className="w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${bg1})` }}
            >
                <h1>Hello W</h1>
            </div>
        </div>
    )
}