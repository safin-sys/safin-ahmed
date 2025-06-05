export const GET = () => {
  return new Response("self-destruct", {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  }) 
};
