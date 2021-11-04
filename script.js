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
        "imgTeam" : "img/angela-caroll-chief-editor.jpg",
        "nameTeam" : "Angela Caroll",
        "roleTeam" : "Chief Editor"
    },

    {
        "imgTeam" : "img/walter-gordon-office-manager.jpg",
        "nameTeam" : "Walter Gordon",
        "roleTeam" : "Office Manager"
    },

    {
        "imgTeam" : "img/angela-lopez-social-media-manager.jpg",
        "nameTeam" : "Angela Lopez",
        "roleTeam" : "Social Media Manager"
    },

    {
        "imgTeam" : "img/scott-estrada-developer.jpg",
        "nameTeam" : "Scott Estrada",
        "roleTeam" : "Developer"
    },

    {
        "imgTeam" : "img/barbara-ramos-graphic-designer.jpg",
        "nameTeam" : "Barabara Ramos",
        "roleTeam" : "Graphic Designer"
    }
];

let teamContainer = document.querySelector(".team-container");

for (let i = 0; i < team.length; i++) {
    let objteam = team[i];

    let teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    let cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    cardImage.innerHTML += 
        `<div class="card-image">
            <img src="${objteam.imgTeam}"/>
        </div>`;
    teamCard.appendChild(cardImage);
    let cardText = document.createElement("div");
    cardText.classList.add("card-text");
    cardText.innerHTML += 
        `<div class="card-text">
                <h3>${objteam.nameTeam}</h3>
                <p>${objteam.roleTeam}</p>
        </div>`;
    teamCard.appendChild(cardText);

    teamContainer.appendChild(teamCard);
}