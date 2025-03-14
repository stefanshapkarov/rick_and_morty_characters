'use client';

import { useState } from "react";
import Characters from "@/components/Characters";
import StatusFilter from "@/components/StatusFilter";
import SpeciesFilter from "@/components/SpeciesFilter";
import Paginator from "@/components/Paginator";
import ApolloWrapper from "./ApolloWrapper";

export default function Home() {
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setCurrentPage(1);
  };

  const handleSpeciesChange = (newSpecies) => {
    setSpecies(newSpecies);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleTotalPagesUpdate = (pages) => {
    setTotalPages(pages);
  };

  return (
    <ApolloWrapper>
      <div className="container mx-auto p-4">
        <div>
          <StatusFilter status={status} onStatusChange={handleStatusChange} />
          <SpeciesFilter species={species} onSpeciesChange={handleSpeciesChange} />
          <hr className="mb-5" />
        </div>
        <Characters 
          page={currentPage} 
          status={status} 
          species={species} 
          onTotalPagesUpdate={handleTotalPagesUpdate}
        />
        {totalPages > 0 && (
          <Paginator 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        )}
      </div>
    </ApolloWrapper>
  );
}