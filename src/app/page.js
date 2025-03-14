'use client';

import { useState } from "react";
import Characters from "@/components/Characters";
import StatusFilter from "@/components/StatusFilter";
import ApolloWrapper from "./ApolloWrapper";

export default function Home() {
  const [status, setStatus] = useState("");

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <ApolloWrapper>
      <div className="container mx-auto p-4">
        <StatusFilter status={status} onStatusChange={handleStatusChange} />
        <Characters page={1} status={status} />
      </div>
    </ApolloWrapper>
  );
}