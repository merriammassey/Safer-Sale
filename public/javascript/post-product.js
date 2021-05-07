async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="item-post"]').value;
  const description = document.querySelector('input[name="description-post"]').value
  const price = document.querySelector('input[name="price-post"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      price,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response)
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".new-post-form").addEventListener("submit", newFormHandler);
