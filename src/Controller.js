async function Controller(data) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
}

export default Controller;
