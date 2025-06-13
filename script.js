function adoptPet() { 

    alert("Thank you for your interest in adopting! Our team will contact you soon."); 

} 
console.log("Hello")
console.log("Loading pets...");

var ap = document.getElementById("all-pets")
// ap.innerHTML = "<h1>Hello World</h1>";

// for(let i = 0; i<5; i++) {
//     // ap.innerHTML += "<div>"+i+"</div>"
//     ap.innerHTML += i;
// }

console.log("Loading pets...");

// const pets = [
//     { "name": "Buddy", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog01.jpg" },
//     { "name": "Buddy", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog02.jpg" },
//     { "name": "Whiskers", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat01.jpg" },
//     { "name": "Mittens", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat02.jpg" },
//     { "name": "Mittens", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat02.jpg" }
// ];

// window.onload = function () {
//     const ap = document.getElementById("all-pets");
//     if (!ap) return;

//     const title = document.createElement("h2");
//     title.textContent = "Featured Pets";
//     ap.appendChild(title);

//     const petList = document.createElement("div");
//     petList.className = "featured";

//     for (let i = 0; i < pets.length; i++) {
//         const petCard = document.createElement("div");
//         petCard.className = "pet";
//         petCard.innerHTML = `
//             <img src="${pets[i].img}" alt="${pets[i].name}">
//             <h3>${pets[i].name}</h3>
//             <p>Type: ${pets[i].type}</p>
//             <p>Age: ${pets[i].age} years</p>
//             <button onclick="adoptPet('${pets[i].name}')">Adopt Now</button>
//         `;
//         petList.appendChild(petCard);
//     }

//     ap.appendChild(petList);
// };

// function adoptPet(name) {
//     alert(`Thank you for adopting ${name}!`);
// }


// const pets = [
//     { "name": "Buddy", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog01.jpg" },
//     { "name": "Max", "type": "Dog", "age": 4, "img": "petshop-img/dogs/dog02.jpg" },
//     { "name": "Whiskers", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat01.jpg" },
//     { "name": "Mittens", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat02.jpg" },
//     { "name": "Tweety", "type": "Bird", "age": 1, "img": "petshop-img/birds/bird01.jpg" },
//     { "name": "Chirpy", "type": "Bird", "age": 2, "img": "petshop-img/birds/bird02.jpg" },
//     { "name": "Cappy", "type": "Capybara", "age": 2, "img": "petshop-img/capybaras/capybara01.jpg" },
//     { "name": "Choco", "type": "Capybara", "age": 3, "img": "petshop-img/capybaras/capybara02.jpg" }
// ];

// window.onload = function () {
//     const ap = document.getElementById("all-pets");
//     if (!ap) return;

//     // Group pets by type
//     const petGroups = {};
//     pets.forEach(pet => {
//         if (!petGroups[pet.type]) {
//             petGroups[pet.type] = [];
//         }
//         petGroups[pet.type].push(pet);
//     });

//     // Create sections by type
//     for (const type in petGroups) {
//         const section = document.createElement("section");
//         const title = document.createElement("h2");
//         title.textContent = type + "s"; // e.g., "Dogs", "Cats"
//         section.appendChild(title);

//         const petList = document.createElement("div");
//         petList.className = "featured";

//         petGroups[type].forEach(pet => {
//             const petCard = document.createElement("div");
//             petCard.className = "pet";
//             petCard.innerHTML = `
//                 <img src="${pet.img}" alt="${pet.name}">
//                 <h3>${pet.name}</h3>
//                 <p>Type: ${pet.type}</p>
//                 <p>Age: ${pet.age} years</p>
//                 <button onclick="adoptPet('${pet.name}')">Adopt Now</button>
//             `;
//             petList.appendChild(petCard);
//         });

//         section.appendChild(petList);
//         ap.appendChild(section);
//     }
// };

// function adoptPet(name) {
//     alert(`Thank you for adopting ${name}!`);
// }

console.log("Loading pets...");

const featuredPets = [
    { "name": "Buddy", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog01.jpg" },
    { "name": "Buddy", "type": "Dog", "age": 2, "img": "petshop-img/dogs/dog02.jpg" },
    { "name": "Whiskers", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat01.jpg" },
    { "name": "Mittens", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat02.jpg" }
];

const allPets = [
    { "name": "Buddy", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog01.jpg" },
    { "name": "Max", "type": "Dog", "age": 4, "img": "petshop-img/dogs/dog02.jpg" },
    { "name": "Whiskers", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat01.jpg" },
    { "name": "Mittens", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat02.jpg" },
    { "name": "Tweety", "type": "Bird", "age": 1, "img": "petshop-img/birds/bird01.jpg" },
    { "name": "Chirpy", "type": "Bird", "age": 2, "img": "petshop-img/birds/bird02.jpg" },
    { "name": "Cappy", "type": "Capybara", "age": 2, "img": "petshop-img/capybaras/capybara01.jpg" },
    { "name": "Choco", "type": "Capybara", "age": 3, "img": "petshop-img/capybaras/capybara02.jpg" }
];

window.onload = function () {
    const ap = document.getElementById("all-pets");
    if (!ap) return;

    // Show featured pets
    const featuredSection = document.createElement("section");
    const featuredTitle = document.createElement("h2");
    featuredTitle.textContent = "Featured Pets";
    featuredSection.appendChild(featuredTitle);

    const featuredList = document.createElement("div");
    featuredList.className = "featured";

    featuredPets.forEach(pet => {
        const petCard = document.createElement("div");
        petCard.className = "pet";
        petCard.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
            <button onclick="adoptPet('${pet.name}')">Adopt Now</button>
        `;
        featuredList.appendChild(petCard);
    });

    featuredSection.appendChild(featuredList);
    ap.appendChild(featuredSection);

    // Group allPets by type (excluding duplicates)
    const grouped = {};
    allPets.forEach(pet => {
        if (!grouped[pet.type]) grouped[pet.type] = [];
        grouped[pet.type].push(pet);
    });

    for (const type in grouped) {
        const section = document.createElement("section");
        const title = document.createElement("h2");
        title.textContent = type + "s";
        section.appendChild(title);

        const list = document.createElement("div");
        list.className = "featured";

        grouped[type].forEach(pet => {
            const petCard = document.createElement("div");
            petCard.className = "pet";
            petCard.innerHTML = `
                <img src="${pet.img}" alt="${pet.name}">
                <h3>${pet.name}</h3>
                <p>Type: ${pet.type}</p>
                <p>Age: ${pet.age} years</p>
                <button onclick="adoptPet('${pet.name}')">Adopt Now</button>
            `;
            list.appendChild(petCard);
        });

        section.appendChild(list);
        ap.appendChild(section);
    }
};

function adoptPet(name) {
    alert(`Thank you for adopting ${name}!`);
}
