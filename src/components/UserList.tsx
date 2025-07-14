import { useContext } from "react";
import UserContext from "../contexts/UserProvider";
import type { User } from "../type";
import { useNavigate } from "react-router";

export default function UserList() {
  const users = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
              ID
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
              Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.users.map((user: User) => (
            <tr
              key={user.id}
              className="hover:bg-gray-50"
              onClick={() => {
                navigate(`/users/${user.id}`);
              }}
            >
              <td className="border border-gray-300 px-4 py-2 text-blue-600">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                {user.age ? user.age : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
