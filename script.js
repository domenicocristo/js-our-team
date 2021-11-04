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

for (let i = 0; i < team.length; i++) {
    let objteam = team[i];

    for (let key in objteam) {
        console.log(key, objteam[key]);
        teamContainer.innerHTML = (key, objteam);
    }
}