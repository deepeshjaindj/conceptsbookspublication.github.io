"use strict";

document.getElementById("calculateButton").addEventListener("click", calculate);
document.getElementById("resetButton").addEventListener("click", reset);

function calculate() {
  let cPageWeight = parseFloat(
    document.querySelector("#coverPaperWeight").value
  );
  let cColorFormat = parseFloat(
    document.querySelector("#coverColorType").value
  );
  let cLamination = parseFloat(
    document.querySelector("#coverLamination").value
  );
  let cPrintFormat = parseFloat(document.querySelector("#coverPrint").value);
  let iPageWeight = parseFloat(document.querySelector("#paperWeight").value);
  let iColorType = parseFloat(document.querySelector("#colorType").value);
  let iNumberOfPages = parseFloat(
    document.querySelector("#numberOfPages").value
  );
  let bPaperSize = parseFloat(document.querySelector("#paperSize").value);
  let bBindingType = parseFloat(document.querySelector("#bindingType").value);
  let bNumberOfBooks = parseFloat(
    document.querySelector("#numberOfBooks").value
  );

  let cPrice = 0,
    iPrice = 0,
    totalPrice = 0;
  if (
    cPageWeight == -1 ||
    cColorFormat == -1 ||
    cLamination == -1 ||
    cPrintFormat == -1 ||
    iPageWeight == -1 ||
    iColorType == -1 ||
    iNumberOfPages <= 0 ||
    iNumberOfPages > 1000 ||
    bPaperSize == -1 ||
    bBindingType == -1 ||
    bNumberOfBooks <= 0 ||
    bNumberOfBooks > 1000
  ) {
    document
      .querySelector("#finalResult")
      .setAttribute("style", "color : red;");
    document.querySelector("#finalResult").value =
      "**Invalid Input - Select Valid Values";

    if (cPageWeight == -1) {
      document
        .querySelector("#coverPaperWeight")
        .setAttribute("style", "color: red;");
    }

    if (cColorFormat == -1) {
      document
        .querySelector("#coverColorType")
        .setAttribute("style", "color: red;");
    }

    if (cLamination == -1) {
      document
        .querySelector("#coverLamination")
        .setAttribute("style", "color: red;");
    }

    if (cPrintFormat == -1) {
      document
        .querySelector("#coverPrint")
        .setAttribute("style", "color: red;");
    }

    if (iPageWeight == -1) {
      document
        .querySelector("#paperWeight")
        .setAttribute("style", "color: red;");
    }

    if (iColorType == -1) {
      document.querySelector("#colorType").setAttribute("style", "color: red;");
    }

    if (iNumberOfPages <= 0 || iNumberOfPages > 1000) {
      document.querySelector("#nopLabel").setAttribute("style", "color: red;");
      document
        .querySelector("#numberOfPages")
        .setAttribute("style", "color: red;");
    }

    if (bPaperSize == -1) {
      document.querySelector("#paperSize").setAttribute("style", "color: red;");
    }

    if (bBindingType == -1) {
      document
        .querySelector("#bindingType")
        .setAttribute("style", "color: red;");
    }

    if (bNumberOfBooks <= 0 || bNumberOfBooks > 1000) {
      document.querySelector("#nobLabel").setAttribute("style", "color: red;");
      document
        .querySelector("#numberOfBooks")
        .setAttribute("style", "color: red;");
    }
  } else {
    document
      .querySelector("#coverPaperWeight")
      .setAttribute("style", "color: #262626;");
    document
      .querySelector("#coverColorType")
      .setAttribute("style", "color: #262626;");
    document
      .querySelector("#coverLamination")
      .setAttribute("style", "color: #262626;");
    document
      .querySelector("#coverPrint")
      .setAttribute("style", "color: #262626;");
    document
      .querySelector("#paperWeight")
      .setAttribute("style", "color: #262626;");
    document
      .querySelector("#colorType")
      .setAttribute("style", "color: #262626;");
    document
      .querySelector("#nopLabel")
      .setAttribute("style", "color: #262626;");
    document
      .querySelector("#numberOfPages")
      .setAttribute("style", "color: #262626;");
    document
      .querySelector("#paperSize")
      .setAttribute("style", "color: #262626;");
    document
      .querySelector("#bindingType")
      .setAttribute("style", "color: #262626;");
    document
      .querySelector("#nobLabel")
      .setAttribute("style", "color: #262626;");
    document
      .querySelector("#numberOfBooks")
      .setAttribute("style", "color: #262626;");

    if (cPageWeight === 80) {
      cPrice += 2;
    } else if (cPageWeight === 100) {
      cPrice += 3;
    } else if (cPageWeight === 120) {
      cPrice += 6;
    } else if (cPageWeight === 150) {
      cPrice += 10;
    } else {
      cPrice = 0;
    }

    if (cColorFormat === 1) {
      cPrice += 0;
    } else if (cColorFormat === 2) {
      cPrice += 2;
    } else {
      cPrice += 5;
    }

    if (cLamination === 0) {
      cPrice += 0;
    } else {
      cPrice += 10;
    }

    if (cPrintFormat === 1) {
      cPrice += 0;
    } else {
      cPrice += 3;
    }

    if (iPageWeight === 60) {
      iPrice += 1;
    } else if (iPageWeight === 70) {
      iPrice += 1.5;
    } else if (iPageWeight === 80) {
      iPrice += 2;
    } else {
      iPrice += 2.5;
    }

    if (iColorType === 1) {
      iPrice += 0;
    } else if (iColorType === 2) {
      iPrice += 1;
    } else {
      iPrice += 4;
    }

    if (iNumberOfPages > 0 && iNumberOfPages < 250) {
      iPrice = iPrice * iNumberOfPages;
    } else if (iNumberOfPages >= 250 && iNumberOfPages < 750) {
      iPrice = iPrice * iNumberOfPages;
      iPrice = iPrice - iPrice * 0.05;
    } else {
      iPrice = iPrice * iNumberOfPages;
      iPrice = iPrice - iPrice * 0.1;
    }

    if (bPaperSize == 1) {
      iPrice += 0;
    } else if (bPaperSize == 2) {
      iPrice = iPrice + iPrice * 0.05;
    } else {
      iPrice = iPrice + iPrice * 0.07;
    }

    if (bBindingType == 1) {
      iPrice += 25;
    } else {
      iPrice += 40;
    }

    if (bNumberOfBooks > 0 && bNumberOfBooks < 250) {
      iPrice = iPrice * bNumberOfBooks;
    } else if (bNumberOfBooks >= 250 && bNumberOfBooks < 750) {
      iPrice = iPrice * bNumberOfBooks;
      iPrice = iPrice - iPrice * 0.05;
    } else {
      iPrice = iPrice * bNumberOfBooks;
      iPrice = iPrice - iPrice * 0.1;
    }

    totalPrice = cPrice + iPrice;

    document
      .querySelector("#finalResult")
      .setAttribute("style", "color : green;");
    document.querySelector("#finalResult").value =
      "The Cheapest Possible Price is: ₹" + totalPrice + " /-";
  }
}

function reset() {
  // Set Color
  document
    .querySelector("#coverPaperWeight")
    .setAttribute("style", "color: #262626;");
  document
    .querySelector("#coverColorType")
    .setAttribute("style", "color: #262626;");
  document
    .querySelector("#coverLamination")
    .setAttribute("style", "color: #262626;");
  document
    .querySelector("#coverPrint")
    .setAttribute("style", "color: #262626;");
  document
    .querySelector("#paperWeight")
    .setAttribute("style", "color: #262626;");
  document.querySelector("#colorType").setAttribute("style", "color: #262626;");
  document.querySelector("#nopLabel").setAttribute("style", "color: #262626;");
  document
    .querySelector("#numberOfPages")
    .setAttribute("style", "color: #262626;");
  document.querySelector("#paperSize").setAttribute("style", "color: #262626;");
  document
    .querySelector("#bindingType")
    .setAttribute("style", "color: #262626;");
  document.querySelector("#nobLabel").setAttribute("style", "color: #262626;");
  document
    .querySelector("#numberOfBooks")
    .setAttribute("style", "color: #262626;");
  document
    .querySelector("#finalResult")
    .setAttribute("style", "color: #262626;");

  // Empty Components
  document.querySelector("#coverPaperWeight").value = -1;
  document.querySelector("#coverColorType").value = -1;
  document.querySelector("#coverLamination").value = -1;
  document.querySelector("#coverPrint").value = -1;
  document.querySelector("#paperWeight").value = -1;
  document.querySelector("#colorType").value = -1;
  document.querySelector("#numberOfPages").value = 0;
  document.querySelector("#paperSize").value = -1;
  document.querySelector("#bindingType").value = -1;
  document.querySelector("#numberOfBooks").value = 0;
  document.querySelector("#finalResult").value = "Result";
}
