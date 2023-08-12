"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div className="flex flex-row w-full  justify-center items-center">
        <div className="w-full sm:w-full md:w-8/12 xl:w-6/12 ">
          <div className="flex flex-1 flex-col max-w-full justify-center  relative">
            <div className="mb-5 ">
              <h1 className="text-5xl font-bold mb-4">User Profile</h1>
            </div>

            <div>
              <p>Username:</p>
              <p className="text-xl font-semibold mt-2 mb-10">
                {user.username}
              </p>
              <p>Nama:</p>
              <p className="text-xl font-semibold mt-2 mb-10">{user.name}</p>
              <p>No Telp:</p>
              <p className="text-xl font-semibold mt-2 mb-10">{user.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
