"use client";
import React from "react";
import { updateData } from "@/components/user/actions";
import { useFormState } from "react-dom";
import type { User } from "@prisma/client";
import { SubmitButton } from "@/components/user/button";

const EditVerif = ({ data }: { data: User }) => {
  const [state, formAction] = useFormState(
    updateData.bind(null, data.id),
    null
  );
  return (
    <form action={formAction}>
      <input
        type="text"
        name="role"
        className="hidden"
        value={"verified user"}
      />
      <SubmitButton label="verif" />
    </form>
  );
};

export default EditVerif;
