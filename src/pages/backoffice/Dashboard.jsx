import React from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

    const API_URL = process.env.REACT_APP_API_URL;

    const token = localStorage.getItem('userLogin');
    const navigate = useNavigate();

    const [carri, setCarri] = useState([]);
    const [refresh, setRefresh] = useState(false);


    console.log("Carri", carri);

    // Aggiungi controllo per accesso: se nel localstorage non ci sono dati non fa visualizzare dashboard

    // Logica per azzerare i voti
    const deleteVotes = async ({ carroId }) => {
        try {
            const response = await axios.delete(`${API_URL}/votes/delete-votes`, {
                data: { carroId: carroId }
            });

            setRefresh(prev => !prev)

        } catch (error) {
            console.error(error)
        }

        console.log(`Voti del carro ${carroId} eliminati`);
    };

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        const getCarri = async () => {
            try {
                const res = await axios.get(`${API_URL}/carri`);
                setCarri(res.data)
            } catch (e) {
                console.error(e)
            }
        };
        getCarri()
    }, [refresh])

    // const deleteAll = () => {
    //     window.confirm("Sei sicuro di voler eliminare tutti i voti?")
    // }

    return (
        <section className="bg-gray-900 h-fit md:h-screen p-20">
            <div className="flex flex-col gap-16">
                <div className="text-white text-4xl font-bold">
                    <h1 className="title">Elenco dei carri con il totale dei voti</h1>
                </div>
                <div className="flex gap-2 flex-wrap justify-between">
                    {carri.map((carro, index) => (
                        <DashboardCard
                            key={index}
                            title={carro.title}
                            votes={carro.totaleVoti}
                            img={carro.image}
                        // onDelete={() => deleteVotes({carroId: carro._id})}
                        />
                    )
                    )}
                </div>
                {/* <div>
                    <button className="bg-transparent border-2 border-red-500 text-red-500 font-bold py-1 px-2 rounded-3xl" onClick={deleteAll}>
                        Azzera
                    </button>
                </div> */}
            </div>
        </section>
    )
}