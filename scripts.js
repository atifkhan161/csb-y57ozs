console.log("To infinity and beyond.");

// write your JavaScript here
function addOpinion() {
  if (document.getElementById("add_to_page").value == "") {
    document.getElementById("ratingAnswer").innerHTML = "";
  } else {
    document.getElementById("ratingAnswer").innerHTML =
      "You entered " + document.getElementById("add_to_page").value;
    document.getElementById("add_to_page").value = "";
  }
}
