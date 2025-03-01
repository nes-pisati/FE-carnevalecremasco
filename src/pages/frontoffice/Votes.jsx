import React, { useEffect, useState } from "react";
import VoteCard from "../../components/VoteCard/VoteCard";
import axios from 'axios'
import ThankYou from "../../components/ThankYou/ThankYou";

export default function Votes() {

    const API_URL = process.env.REACT_APP_API_URL;

    const [carri, setCarri] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const getCarri = async () => {
            try {
                const res = await axios.get(`${API_URL}/carri`)
                setCarri(res.data)
            } catch (e) {
                console.error(e)
            }
        };
        getCarri()
    }, [])

    const handleVoteSubmit = async (id, rating) => {

        try {
            await axios.post(`${API_URL}/votes/${id}`, { vote: rating });

        } catch (e) {
            console.error(e);
            alert("Errore nell'invio del voto.");
        }
    }

    const handleNext = () => {
        if (currentIndex < carri.length) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    if(currentIndex === carri.length-1) {
        console.log("last carro");
        
        localStorage.setItem('voto', 'true')
    }

    return (
        <>
            {carri.length > 0 && (
                currentIndex <= carri.length - 1 ? (
                    <VoteCard
                        key={carri[currentIndex]._id}
                        id={carri[currentIndex]._id}
                        title={carri[currentIndex].title}
                        group={carri[currentIndex].team}
                        description={carri[currentIndex].description}
                        img={carri[currentIndex].image}
                        onClick={handleNext}
                        onVoteSubmit={handleVoteSubmit}
                    />
                ) : (
                    <ThankYou />
                )
            )}

        </>
    )
}