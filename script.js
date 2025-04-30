document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchButton");
  const dogImage = document.getElementById("dogImage");
  const dogImageContainer = document.getElementById("dogImageContainer");

  fetchButton.addEventListener("click", async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error(`Http error ! indice : ${response.status}`);
      }

      const data = await response.json();

      dogImage.src = data.message;
      dogImage.style.display = "block";
    } catch (error) {
      const errorMessage = document.createElement("p");
      errorMessage.className = "error";
      errorMessage.textContent = `Error: ${error.message}`;
      dogImageContainer.appendChild(errorMessage);
    }
  });
});
