import { getUsers } from "@/services/getUsers";

const Home = async () => {
  const users: User[] = await getUsers();

  return (
    <div className="overflow-auto w-[60rem] p-5 bg-stone-200">
      <table className="border border-stone-400 rounded-lg mt-5 p-3 max-w-full w-[70rem]">
        <thead className="bg-stone-400 h-12">
          <tr className="text-left space-x-10 text-gray-800">
            <th className="pr-8 pl-3">Name</th>
            <th className="pr-8 pl-3">Username</th>
            <th className="pr-8 pl-3">Email</th>
            <th className="pr-8 pl-3">Street</th>
            <th className="pl-3">Phone</th>
          </tr>
        </thead>

        <tbody className="text-start">
          {users?.map((user) => (
            <tr key={user.id} className="border border-stone-400 h-12">
              <td className="pr-8 pl-3 text-gray-800 font-semibold">
                {user.name}
              </td>
              <td className="pr-8 pl-3 text-gray-800">{user.username}</td>
              <td className="pr-8 pl-3 text-sm text-stone-600">{user.email}</td>
              <td className="pr-8 pl-3 text-gray-800">{user.address.street}</td>
              <td className="pl-3 text-sm text-stone-600">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
