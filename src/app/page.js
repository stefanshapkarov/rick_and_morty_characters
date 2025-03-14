'use client';

import { useState } from "react";
import Characters from "@/components/Characters";
import StatusFilter from "@/components/StatusFilter";
import SpeciesFilter from "@/components/SpeciesFilter";
import ApolloWrapper from "./ApolloWrapper";

export default function Home() {
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleSpeciesChange = (newSpecies) => {
    setSpecies(newSpecies);
  };

  return (
    <ApolloWrapper>
      <div className="container mx-auto p-4">
        <div>
          <StatusFilter status={status} onStatusChange={handleStatusChange} />
          <SpeciesFilter species={species} onSpeciesChange={handleSpeciesChange} />
          <hr className="mb-5" />
        </div>
        <Characters page={1} status={status} species={species} />
      </div>
    </ApolloWrapper>
  );
}