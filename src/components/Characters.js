'use client';

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getCharacters } from "@/GraphQL/query";

function Characters({ page, status = '', species = '', onTotalPagesUpdate }) {

    const { error, loading, data } = useQuery(getCharacters(page, status, species));

    const [characters, setCharacters] = useState([]);

    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        if (data) {
            if (onTotalPagesUpdate && data.characters.info) {
                onTotalPagesUpdate(data.characters.info.pages);
            }

            if (sortBy === '') {
                setCharacters(data.characters.results);
            } else {
                let sortedCharacters = [...data.characters.results];
                if (sortBy === 'name') {
                    sortedCharacters.sort((a, b) => a.name.localeCompare(b.name));
                } else if (sortBy === 'origin') {
                    sortedCharacters.sort((a, b) => a.origin.name.localeCompare(b.origin.name));
                }
                setCharacters(sortedCharacters);
            }
        }
    }, [data, sortBy, onTotalPagesUpdate]);

    if (loading) {
        return <div className="text-center py-4">Loading...</div>;
    }
    if (error) {
        return <div className="text-center py-4 text-red-500">Error: {error.message}</div>;
    }

    return (
        <div>
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-64 p-2 border border-gray mb-3"
            >
                <option value="">Sort By</option>
                <option value="name">Name</option>
                <option value="origin">Origin</option>
            </select>
            <div className="grid grid-cols-4 gap-4">
                {characters.map((character) => (
                    <div key={character.name + character.origin.name} className="border p-4">
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
        </div>
    );
}

export default Characters;