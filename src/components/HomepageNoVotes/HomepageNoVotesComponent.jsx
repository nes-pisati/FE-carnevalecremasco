import React from "react";

export default function HomepageNoVotes() {

    return (
        <div className="flex flex-col p-10 justify-center h-screen">
            <div className="w-60 h-60 self-center ">
                <img className="w-full h-full object-contain mix-blend-multiply" src="https://www.carnevaledicrema.it/wp-content/uploads/2019/05/logo_2020_carnevale_cremasco.jpg" alt="logo carnevale cremasco" />
            </div>
            <div>
            <h1 className="text-center text-3xl text-red-600 font-bold">Ci vediamo domenica prossima al Carnevale Cremasco!</h1>
            <p className="text-center px-4 pt-6 text-xl text-blue-900 font-semibold">Grazie per essere stati e state con noi! Vi aspettiamo per divertirci di nuovo insieme!</p>
            </div>
        </div>
    )
}