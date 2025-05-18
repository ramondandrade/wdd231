
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const url = './data/members.json';
const cards = document.querySelector('#cards');

gridbutton.addEventListener("click", showGrid); // example using defined function
listbutton.addEventListener("click", showList); // example using defined function

function showGrid() {
	cards.classList.add("grid");
	cards.classList.remove("list");
}

function showList() {
	cards.classList.add("list");
	cards.classList.remove("grid");
}

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

const displayMembers = (Members) => {
    Members.forEach((Member) => {

        const card = document.createElement('section');

        const logoDiv = document.createElement('div');
        const logo = document.createElement('img');
        logo.setAttribute('src', Member.image);
        logo.setAttribute('alt', Member.name);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');
        logoDiv.appendChild(logo);

        const name = document.createElement('h3');
        name.textContent = Member.name;
        logoDiv.appendChild(name);

        const address = document.createElement('div');
        const contact = document.createElement('div');

        const website = document.createElement('div');
        const link = document.createElement('a');
        link.setAttribute('href', Member.website);
        link.setAttribute('target', '_blank');
        link.textContent = `${Member.website}`;
        website.appendChild(link);
      
       
        address.textContent = Member.address;
        contact.textContent = Member.phone;

        card.appendChild(logoDiv);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(website);
        cards.appendChild(card);

    });

}

getMemberData();
