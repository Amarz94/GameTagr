const trashcan = $("a.delete");
console.log(trashcan);

trashcan.on("click", function (event) {

  $.ajax(`/games/${this.dataset.doc}`, {
    method: "DELETE",
  }).done((response) => (window.location.href = response.redirect));

  // .then((data) => console.log(data))
  // .catch(err => console.log(err)));
});
