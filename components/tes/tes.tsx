import React, { useState } from "react";
import { useParams } from "next/navigation";

const Tes = () => {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = {
      email: "suhendidahlan1997@gmail.com",
    };

    const response = await fetch(`/api/tes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const requestData = await response.json();

    console.log({ requestData });
  }
  return (
    <div className="">
      <form>
        <button className="bg-slate-500 mt-10" onClick={handleSubmit}>
          Click
        </button>
      </form>
    </div>
  );
};

export default Tes;
