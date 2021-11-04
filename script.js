// 1. Creiamo il nostro array di oggetti che rappresentano ciascun membro del team
// 2. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// 3. facciamo in modo che quando si aggiungano gli input nella pagina appaia la card aggiuntiva

let team = [
    {
        "imgTeam" : "img/wayne-barnett-founder-ceo.jpg",
        "nameTeam" : "Wayne Barnett",
        "roleTeam" : "Founder & CEO"
    },

    {
        "imgTeam" : "img/wayne-barnett-founder-ceo.jpg",
        "nameTeam" : "Wayne Barnett",
        "roleTeam" : "Founder & CEO"
    },

    {
        "imgTeam" : "img/wayne-barnett-founder-ceo.jpg",
        "nameTeam" : "Wayne Barnett",
        "roleTeam" : "Founder & CEO"
    },

    {
        "imgTeam" : "img/wayne-barnett-founder-ceo.jpg",
        "nameTeam" : "Wayne Barnett",
        "roleTeam" : "Founder & CEO"
    },

    {
        "imgTeam" : "img/wayne-barnett-founder-ceo.jpg",
        "nameTeam" : "Wayne Barnett",
        "roleTeam" : "Founder & CEO"
    },

    {
        "imgTeam" : "img/wayne-barnett-founder-ceo.jpg",
        "nameTeam" : "Wayne Barnett",
        "roleTeam" : "Founder & CEO"
    }
];

let newTeam = {
    "imgTeam" : "img/wayne-barnett-founder-ceo.jpg",
    "nameTeam" : "Wayne Barnett",
    "roleTeam" : "Founder & CEO"
}

team.push(newTeam);

let teamContainer = document.querySelector(".team-container");
let cardImage = document.querySelector(".card-image");
let cardText = document.querySelector(".card-text");

for (let i = 0; i < team.length; i++) {
    let objteam = team[i];

    for (let key in objteam) {
        let teamContainer = document.createElement("div").classList.add("team-card");
        let cardImage = document.createElement("div").classList.add("card-image");
        cardImage.innerHTML += 
        `<div class="card-image">
            <img src="${objteam[key]}"/>
        </div>`
        let cardText = document.createElement("div").classList.add("card-text");
        cardText.innerHTML += 
        `<div class="card-text">
             <h3>${objteam[key]}</h3>
             <p>${objteam[key]}</p>
        </div>`
    }
}