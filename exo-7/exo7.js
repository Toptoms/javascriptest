console.log("exo-7");

var typetraduit = {

    "car": "caisse",
    "house": "baraque",
    "game": "jeu",
    "videogame": "jeuvideo",
    "show": "spectacle"
};

/*for (var i=0; i < jsonDatas.length; i++) {
    var tableau = Object.keys(typetraduit);
    tableau.forEach(element1 => {
        if (jsonDatas[i].type === element1){
            jsonDatas[i].categorie = typetraduit[element1];// ajout d'une propriete dans l'objet 

        };
    });
};

/*jsonDatas.forEach(element0 => {
    var tableau = Object.keys(typetraduit);
    tableau.forEach(element1 => {
        if (element0.type === element1) {
            element0.categorie = typetraduit[element1];// ajout d'une propriete dans l'objet 

        };
    });
});*/

/*jsonDatas.forEach(element0 => {
    var tableau = Object.keys(typetraduit);
    let v = tableau.indexOf(element0.type)
    if (v > -1) {
        element0.type = typetraduit[tableau[v]];
    };
});*/

function show() {
    var sel = document.getElementById("type");
    jsonDatas.forEach(element => {
        if (element.type === sel.value) {
            document.getElementById('result').innerHTML += '<br/>' + element.name+ ' '+ element.type+ ' '+ element. description+ ' '+ element. price+ ' '+ element. quantity;
        }

    });

}


console.log(jsonDatas);