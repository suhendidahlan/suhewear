import React from "react";
import { getDataById } from "@/components/user/data";
import EditUserAccountAdmin from "@/components/user/edit-user-admin";

const UserDashboard = async ({ params }: { params: { id: string } }) => {
  const user: any = await getDataById(params.id);

  return (
    <div className="text-center mt-4 mb-10">
      <div className="text-2xl font-bold my-2">ID Acount</div>
      <EditUserAccountAdmin data={user} />
    </div>
  );
};

export default UserDashboard;
