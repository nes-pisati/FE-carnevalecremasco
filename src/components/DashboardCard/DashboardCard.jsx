import React from "react";

export default function DashboardCard({ title, votes, img, onDelete }) {
    return (
        <>
            <div className="w-96 sm:w-60 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full min-h-[320px]">
                <img className="rounded-t-lg h-40 object-cover w-full" src={img} alt="Fotografia del carro allegorico" />
                <div className="p-5 flex flex-col gap-4 flex-grow">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-none">{title}</h5>
                    <div className="mt-auto flex justify-between items-center">
                        <p className=" text-gray-700 dark:text-gray-400 mb-0">{votes}</p>
                        <button className="bg-transparent border-2 border-red-500 text-red-500 font-bold py-1 px-2 rounded-3xl" onClick={onDelete}>
                            Azzera
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}