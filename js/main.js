//creo una costante in cui inseriscotutti i vari oggetti
const ourTeam = [
    //uno alla volta inserisco tutti gli oggetti con relativi attributi
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"

    },
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"

    },
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        foto: "walter-gordon-office-manager.jpg"

    },
    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"

    },
    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto: "scott-estrada-developer.jpg"

    },
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"

    }
]

//richiamo il div creato in html tramite id
let contenitore = document.getElementById("contenitore");

//creo un ciclo for per processare i membri del team (ourTeam)
for (let i = 0; i < ourTeam.length; i++) {
    //creo una const in cui abbino l'elemento in posizione i
    const teamMember = ourTeam[i];
    
    //con console.log vado a stampare i vari attributi
    console.log("Nome: " + teamMember.nome);
    console.log("Ruolo: " + teamMember.ruolo);
    console.log("Foto: " + teamMember.foto);

    //creo una struttura per andare a stampare sul DOM

    //creo una lista che conterrà gli attributi dell'elemento
    let listaAttributiMembro = document.createElement("ul");

    //appendo la lista al contenitore
    contenitore.append(listaAttributiMembro);

    //creo una let per ogni li, che avrà al suo interno un attributo
    let attributoNome = document.createElement("li");
    attributoNome.append(teamMember.nome);
    listaAttributiMembro.append(attributoNome);

    let attributoRuolo = document.createElement("li");
    attributoRuolo.append(teamMember.ruolo);
    listaAttributiMembro.append(attributoRuolo);

    //solo nel caso della foto creo un elemento img contenitore
    let attributoFoto = document.createElement("li");
    let fotoMembro = document.createElement("img");
    fotoMembro.src = "./img/" + teamMember.foto;
    attributoFoto.append(fotoMembro);
    listaAttributiMembro.append(attributoFoto);
}