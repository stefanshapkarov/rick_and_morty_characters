import Characters from "@/components/Characters";
import ApolloWrapper from "./ApolloWrapper";

export default function Home() {
  return (
    <ApolloWrapper>
      <Characters page={1}/>
    </ApolloWrapper>
  );
}