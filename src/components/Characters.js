'use client';

import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { getCharacters } from "@/GraphQL/query";

function Characters({ page, status = '' }) {

    const { error, loading, data } = useQuery(getCharacters(page, status));

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        console.log(data);
        if (data) {
            setCharacters(data.characters.results);
        }
    }, [data]);

    return (
        <div className="grid grid-cols-4 gap-4">
            {characters.map((character) => (
                <div key={character.name} className="border p-4">
                    <h3 className="font-bold text-lg">{character.name}</h3>
                    <div>
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Origin: {character.origin.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Characters;