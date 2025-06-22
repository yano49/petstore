const allPets = [
    { name: "Buddy", type: "Dog", age: 3, img: "petshop-img/dogs/dog01.jpg" },
    { name: "Max", type: "Dog", age: 4, img: "petshop-img/dogs/dog02.jpg" },
    { name: "Toe", type: "Dog", age: 4, img: "petshop-img/dogs/dog03.jpg" },
    { name: "Whiskers", type: "Cat", age: 2, img: "petshop-img/cats/cat01.jpg" },
    { name: "Mittens", type: "Cat", age: 2, img: "petshop-img/cats/cat02.jpg" },
    { name: "Milo", type: "Cat", age: 2, img: "petshop-img/cats/cat03.jpg" },
    { name: "Tweety", type: "Bird", age: 1, img: "petshop-img/birds/bird01.jpg" },
    { name: "Chirpy", type: "Bird", age: 2, img: "petshop-img/birds/bird02.jpg" },
    { name: "Cappy", type: "Capybara", age: 2, img: "petshop-img/capybaras/capybara01.jpg" },
    { name: "Choco", type: "Capybara", age: 3, img: "petshop-img/capybaras/capybara02.jpg" }
  ];
  
  // Render pets
  function renderPets() {
    const selected = $('input[name="pet-type"]:checked').map(function () {
      return $(this).val();
    }).get();
  
    const container = $('#all-pets');
    container.empty();
  
    const grouped = {};
    allPets.forEach(pet => {
      if (!grouped[pet.type]) grouped[pet.type] = [];
      grouped[pet.type].push(pet);
    });
  
    for (const type in grouped) {
      if (!selected.includes(type)) continue;
  
      const section = $('<section>');
      section.append(`<h2>${type}s</h2>`);
  
      const petList = $('<div class="featured">');
      grouped[type].forEach(pet => {
        petList.append(`
          <div class="pet">
            <img src="${pet.img}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
            <button onclick="adoptPet('${pet.name}')">Adopt Now</button>
          </div>
        `);
      });
  
      section.append(petList);
      container.append(section);
    }
  }
  
  // Alert on adoption
  function adoptPet(name) {
    alert(`Thank you for adopting ${name}!`);
  }
  
  // Listen to checkbox changes
  $(document).ready(function () {
    $('input[name="pet-type"]').on('change', renderPets);
    renderPets();
  });
  