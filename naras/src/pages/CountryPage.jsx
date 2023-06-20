import { useParams } from "react-router-dom";

export default function CountryPage() {
  const { id } = useParams();
  return <div>MOVIE PAGE : {id}</div>;
}
