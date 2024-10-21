"use client";
import React from "react";
import { deleteData } from "@/components/chart/actions";
import { RiDeleteBack2Fill } from "react-icons/ri";

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteDataWithId = deleteData.bind(null, id);
  return (
    <form action={deleteDataWithId}>
      <button type="submit">
        <RiDeleteBack2Fill size={20} />
      </button>
    </form>
  );
};
