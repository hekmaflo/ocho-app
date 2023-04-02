import UserRegister from "../components/UserRegister";
import List from "../components/List";
import { useParams } from "react-router-dom";
const Profile = () => {
  const { id } = useParams();
  return (
    <div className="profile">
      <h1>Profile</h1>
      <List userId={id} />
    </div>
  );
};

export default Profile;
