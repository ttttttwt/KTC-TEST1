import { useContext } from "react";
import UserContext from "../contexts/UserProvider";
import { useParams } from "react-router";

export default function UserDetail() {
  const users = useContext(UserContext);
  const userId = useParams<{ id: string }>().id;
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Detail</h2>
      {(() => {
        const user = users?.users.find((user) => user.id.toString() === userId);
        if (!user) {
          return <p className="text-red-500">User not found</p>;
        }
        return (
          <div key={user.id} className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">ID:</span> {user.id}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Age:</span> {user.age ? user.age : "N/A"}
            </p>
          </div>
        );
      })()}
    </div>
  );
}
