import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { id } = useParams();
  return <div>MOVIE PAGE : {id}</div>;
}
