import Users from "@/components/Users";
import { getUsers } from "@/services/getUsers";

const Home = async () => {
  const users: User[] = await getUsers();

  return <Users users={users} />;
};

export default Home;
