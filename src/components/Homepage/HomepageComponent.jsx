import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomepageComponent() {

    const navigate = useNavigate()

    const startVote = () => {
        navigate('/votes')
    }

    return (
        <div className="flex flex-col p-10 justify-between h-screen">
            <div className="w-60 h-60 self-center ">
                <img className="w-full h-full object-contain mix-blend-multiply" src="https://www.carnevaledicrema.it/wp-content/uploads/2019/05/logo_2020_carnevale_cremasco.jpg" alt="logo carnevale cremasco" />
            </div>
            <h1 className="text-center text-3xl text-red-600 font-bold">Benvenuti e Benvenute al Carnevale Cremasco!</h1>
            <p className="text-center px-10 pt-6 text-xl text-blue-900 font-semibold">Dai un voto da 1 a 10 ai carri della sfilata e aiuta il tuo preferito a vincere l'edizione 2025!</p>
            <button className="border-2 font-bold py-1 px-3 rounded-3xl mt-5 bg-red-600 text-white" onClick={startVote}>
                Inizia a votare
            </button>
        </div>
    )
}