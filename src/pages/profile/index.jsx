import { useParams } from "react-router-dom";

export const Profile = () => {
  const { slug } = useParams();
  return <div>Profile Page - {slug}</div>;
};
