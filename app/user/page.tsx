import React from "react";
import { auth } from "@/auth";

const UserDashboard = async () => {
  const session = await auth();
  return (
    <>
      <div className="text-center p-10 font-bold italic">
        WELCOME {session?.user?.name}
      </div>
    </>
  );
};

export default UserDashboard;
