const trashcan = $("a.delete");
console.log(trashcan);

const localconnection = "http://localhost:3000"
const herokuconnection = "https://gametagr.herokuapp.com"


trashcan.on("click", function(event){
    let endpoint = ""; if (process.env.JAWSDB_URL) {
        endpoint = `${herokuconnection}/games/${this.dataset.doc}`
    } else {
        endpoint = `${localconnection}/games/${this.dataset.doc}`
    }

    $.ajax(endpoint, {
        method: "DELETE"
    })
    .done(response => window.location.href = response.redirect);
    
    // .then((data) => console.log(data))
    // .catch(err => console.log(err)));
});