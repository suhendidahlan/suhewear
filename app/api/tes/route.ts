import nextBase64 from "next-base64";

export const TesData = async (id: string) => {
  const Auth = nextBase64.encode(
    `${process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY}` + ":"
  );

  const response = await fetch(
    `https://api.sandbox.midtrans.com/v2/${id}/status`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${Auth}`,
      },
    }
  );

  const requestData = await response.json();
  return requestData;
};
