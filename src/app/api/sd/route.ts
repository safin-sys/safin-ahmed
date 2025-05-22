export const GET = () => {
  return new Response("self-destruct-sta", {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  }) 
};
