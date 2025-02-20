import React, { useEffect, useState } from "react";
import Styles from '../VoteCard/VoteCard.module.css'

import StarRate from "../StarRate/StarRate";

export default function VoteCard({ id, title, group, description, onClick, onVoteSubmit, img }) {

    const [rating, setRating] = useState(null)

    const handleVote = () => {

        if (rating === null || rating === 0) {
            alert("Seleziona un voto prima di inviare!");
            return;
        }

        onVoteSubmit(id, rating);
        onClick();
    };


    return (
        <>
            <div className="flex flex-col items-center justify-center h-full pt-4">
                <div className="w-24 h-24 rounded-full overflow-hidden self-center ">
                    <img className="w-full h-full object-contain mix-blend-multiply" src="https://www.carnevaledicrema.it/wp-content/uploads/2019/05/logo_2020_carnevale_cremasco.jpg" alt="logo carnevale cremasco" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={img} alt="foto carro" className={Styles.image} />
                    <h1 className={Styles.title}>{title}</h1>
                    <h3 className={Styles.group}>{group}</h3>
                    <p className={Styles.description}>{description}</p>
                </div>
                <div className="flex flex-col w-full pb-6">
                    <form className="flex flex-col items-center justify-center">
                        <fieldset className="flex">
                            <StarRate setRating={setRating} />
                        </fieldset>
                        {/* <button className="bg-transparent border-2 border-red-600 text-red-600 font-bold py-1 px-3 rounded-3xl mt-5" onClick={handleVote}>
                            Vota!
                        </button> */}
                        <button className={`border-2 font-bold py-1 px-3 rounded-3xl mt-5 ${rating > 0 ? "bg-red-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                            onClick={handleVote}
                            disabled={rating === null || rating === 0}>
                            Vota!
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}