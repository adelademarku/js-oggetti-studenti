/*Descrizione:
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (BOOTSTRAP!) */

//---------------------MILESTONE 0 ----------------------

const membriTeam = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela",
        cognome: "Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter",
        cognome: "Gordonz",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela",
        cognome: "Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
]

//------------------------MILESTONE 1------------------------------

//stampo su console le informazione dei singoli oggetti


for (let i = 0; i < membriTeam.length; i++) {
    let singoloMembro = membriTeam[i];
    stampaTeamMember(singoloMembro);
}





//---------------------MILESTONE 2 ----------------------
 /*

document.getElementById("stampaHtml").innerHTML = JSON.stringify(membriTeam, null, 4); */






// ---------------BONUS------------------------


let text = '<div class="card" >'
for (let i = 0; i < membriTeam.length; i++) {
    let singoloMembro = membriTeam[i];
    stampaTeamMember(singoloMembro);
    text += '<img src="..." class="card-img-top" alt="...">' + membriTeam[i].foto + '<div class="card-body"><h5 class="card-title">' + membriTeam[i].nome +
        membriTeam[i].cognome + '</h5>' + '<p class="card-text">' +
        membriTeam[i].ruolo +  '</p></div>'

}
text += "</div>";


document.getElementById("demo").innerHTML = text;











//--------------funzione per stampare i singoli oggetti--------------
function stampaTeamMember(membriTeam) {
    console.log(
        `
-------------- team member -----------
    nome: ${membriTeam.nome}
    cognome: ${membriTeam.cognome}
    ruolo: ${membriTeam.ruolo} 
    foto: ${membriTeam.foto} 
--------------------------------------

        `
    );
    return
}

//-----------------------------------------------------------------------









/*
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg */