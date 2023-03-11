//BUTTON'S FORM
const submitButton = document.getElementById("submit-form-button");
const showFormButton = document.getElementById("show-form-button");
const form = document.getElementById("contact-form");

const openYoutubeButton = document.getElementById("open-youtube-button");

const showFormHandler = () => {
  form.style.display = "block";
  showFormButton.style.display = "none";
};

const submitContactFormHandler = (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  console.log([...data.entries()]);
};

const openYoutubeHandler = () => {
  const url = "https://www.youtube.com/@yogawithadriene";

  Swal.fire({
    title: "Open youtube video?",
    showDenyButton: true,
    confirmButtonText: "Open",
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      const youtubeLink = document.createElement("a");

      youtubeLink.setAttribute("href", url);
      youtubeLink.setAttribute("target", "_blank");

      youtubeLink.click();
    }
  });
};

form.addEventListener("submit", submitContactFormHandler);
showFormButton.addEventListener("click", showFormHandler);
openYoutubeButton.addEventListener("click", openYoutubeHandler);


