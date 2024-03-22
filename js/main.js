let accordionButtons = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < accordionButtons.length; i++) {
  accordionButtons[i].addEventListener("click", function () {
    // this.classList.toggle("active");
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      this.classList.add("active");
    }

    const accordionDescription = this.nextElementSibling;

    let plusIcon = this.getElementsByClassName("plus-icon")[0];
    let minusIcon = this.getElementsByClassName("minus-icon")[0];

    if (accordionDescription.style.maxHeight) {
      accordionDescription.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      accordionDescription.style.maxHeight = accordionDescription.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
}

