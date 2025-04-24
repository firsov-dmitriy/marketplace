import { Header } from "../../modules";
import { useAuth } from "../../components/Auth";

export const Profile = () => {
  const { profile } = useAuth();
  return (
    <div>
      <Header />
      {JSON.stringify(profile)}
    </div>
  );
};
