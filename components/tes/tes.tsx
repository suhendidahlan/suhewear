"use client";
import React from "react";

const Tes = () => {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const newItem = {
      id: "cm2t5cxr10000io3abw6tlsbh",
    };

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    const requestData = await response.json();
    console.log({ requestData });
  }
  return (
    <form>
      <button className="bg-slate-500 mt-10" onClick={handleSubmit}>
        Click
      </button>
    </form>
  );
};

export default Tes;
