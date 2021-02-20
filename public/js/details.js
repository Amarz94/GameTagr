const trashcan = $("a.delete");
console.log(trashcan);


trashcan.on("click", function(event){
    const endpoint = `http://localhost:3000/games/${this.dataset.doc}`;

    $.ajax(endpoint, {
        method: "DELETE"
    })
    .done(response => window.location.href = response.redirect);
    
    // .then((data) => console.log(data))
    // .catch(err => console.log(err)));
});