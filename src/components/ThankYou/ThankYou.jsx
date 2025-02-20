import React from "react";

export default function ThankYou() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-8">
            <div className="w-60 h-60 self-center ">
                <img className="w-full h-full object-contain mix-blend-multiply" src="https://www.carnevaledicrema.it/wp-content/uploads/2019/05/logo_2020_carnevale_cremasco.jpg" alt="logo carnevale cremasco" />
            </div>
            <div>
                <p className="text-center px-10 text-5xl text-red-600 font-bold">Grazie!</p>
                <p className="text-center px-10 pt-6 text-xl text-blue-900 font-semibold">Che vinca il migliore e buona continuazione al Carnevale Cremasco!</p>
            </div>
        </div>
    )
}