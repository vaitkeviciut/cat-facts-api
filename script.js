let catFactsForm = document.querySelector('#cat-facts-form');
let catFactsOutput = document.querySelector('#cat-facts-output');
let breedSelection = document.querySelector('#breed');
let countrySelection = document.querySelector('#country');
let coatSelection = document.querySelector('#coat');

catFactsForm.after(catFactsOutput);

fetch(`https://catfact.ninja/breeds`)
    .then(res => res.json())
    .then(data => {
        console.log(data.data)
        let breeds = data.data;
        breeds.map(breed => {
            let breeds = breed.breed;
            let breedOption = document.createElement('option');
            breedOption.textContent = breeds;
            breedOption.value = breeds;

            breedSelection.append(breedOption);

            let country = breed.country;
            let countryOption = document.createElement('option');
            countryOption.textContent = country;
            countryOption.value = country;

            countrySelection.append(countryOption);

            let coat = breed.coat;
            let coatOption = document.createElement('option');
            coatOption.textContent = coat;
            coatOption.value = coat;

            coatSelection.append(coatOption);
        })
    
    })

catFactsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(`https://catfact.ninja/fact`)
    .then(res => res.json())
    .then(data => {
        console.log(data.fact)
        catFactsOutput.textContent = data.fact
    })

    
})