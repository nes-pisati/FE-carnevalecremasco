import React, { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa'

export default function StarRate({setRating}) {

    const [rateColor, setColor] = useState(null)

    return (
        <>

            {[...Array(10)].map((star, index) => {
                const currentRate = index +1;
                return (
                            <FaStar
                                key={currentRate} 
                                size={30} 
                                onClick={() => { 
                                    setRating(currentRate)
                                }}
                                onMouseEnter={() => setColor(currentRate)}
                                color={currentRate <= (rateColor || 0)? "#f7c409": "var(--color-beige)"}/>
                )
            })}
        </>
    )
}