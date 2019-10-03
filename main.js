const pets = [
    {
        image: 'https://s.abcnews.com/images/US/REX_lykoi_werewolf_cat_1_jt_151030_4x3_992.jpg',
        name: 'Charles',
        color: 'Grey',
        special_skill: 'He looks EXACTLY like a kindly, yet underfed werewolf',
        type_of_pet: 'cat'
        },
    {
        image: 'https://media.npr.org/assets/img/2012/09/21/clifford2_wide-dbb310c2a0edeb9326413ac6f7a180445f3e03a7.jpg?s=1400',
        name: 'Clifford',
        color: 'Red',
        special_skill: 'he is roughly the size of a house and is very friendly',
        type_of_pet: 'dog'
    },
    {
        image: 'https://img.culturacolectiva.com/content_image/2019/4/8/1554827850711-whats-a-unicorn-in-a-relationship-dating-apps-2.jpg',
        name: 'Sarah',
        color: 'a soft glowy pearl',
        special_skill: 'anything her horn touches is instantly healed of all illness and fatigue.',
        type_of_pet: 'mythical'
    },
    {
        image: 'https://ca-times.brightspotcdn.com/dims4/default/6c818b8/2147483647/strip/true/crop/1611x906+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fca-times.brightspotcdn.com%2Ffd%2Fef%2F05c1aab3e76c3d902aa0548c0046%2Fla-la-hm-pet-issue-18-jpg-20150615',
        name: 'Henry',
        color: 'orange tabby',
        special_skill: 'despite his lethargic appearance, Henry is an accomplished athlete. Taking home the gold in several mousing competitions.',
        type_of_pet: 'cat'
    },
    {
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/393/1000/1000/636252782461361426.jpeg',
        name: '[unpronouncable by human mouths]',
        color: 'black as the void, but burning like the core of the earth',
        special_skill: 'a hellhound sent from the abyss to wreak destruction upon the mortal plane, [unpronouncable by human mouths] is great with kids, house trained, and fully capable of devouring a whole cow',
        type_of_pet: 'dog'
    },
    {
        image: 'https://i.kinja-img.com/gawker-media/image/upload/s--w88BTTPs--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/188565isan6jijpg.jpg',
        name: 'Nina',
        color: 'golden/gray/green',
        special_skill: 'a baby chimera, as she reaches maturity, Nina will gain the abilty to breathe fire. Due to her size, we are not accepting applications from anyone living in an apartment or condo',
        type_of_pet: 'mythical'
    },
  ];

  const printToDom = (toPrint, divId) => {
      document.getElementById(divId).innerHTML = toPrint
  }

  const petSelector = (petsArray) => {
      let domString = ''
    for (let i = 0; i < petsArray.length; i++) {
        const pet = petsArray[i]
        domString += `
        <div class="card">
            <h2>${pet.name}</h2>
            <img src=${pet.image} alt='image of ${pet.name}' />
            <p>${pet.special_skill}</p>
            <h3>${pet.type_of_pet}</h3>
        </div>
        `
    }
    printToDom(domString, 'pet-card')
  }

const buttonClick = (e) => {
    const type_of_pet = e.target.id
    const selectedpets = []
    for (let i = 0; i < pets.length; i ++) {
        const pet = pets[i]
        if (pet.type_of_pet === type_of_pet) {
            selectedpets.push(pet)
        }
    }

    if (type_of_pet === 'all') {
        petSelector(pets);
      } else {
        petSelector(selectedpets);
      }
    // pass small list of pets back into the pet builder
}


document.getElementById('dog').addEventListener('click', buttonClick)
document.getElementById('cat').addEventListener('click', buttonClick)
document.getElementById('mythical').addEventListener('click', buttonClick)
document.getElementById('fish').addEventListener('click', buttonClick)
document.getElementById('all').addEventListener('click', buttonClick)

petSelector(pets)