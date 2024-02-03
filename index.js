function newImage(src, positionLeft, positionBottom) {
    let image = document.createElement('img');
    image.src = src;
    image.style.position = 'fixed';
    image.style.left = positionLeft;
    image.style.bottom = positionBottom;

    document.body.append(image);
    return image;  // Return the created image
}

function newItem(image) {
    image.addEventListener('dblclick', function() {
        image.remove();
    });
}

// Call list
let greenCharacter = newImage('./assets/green-character.gif', '100px', '100px');
let pineTree = newImage('./assets/pine-tree.png', '450px', '200px');
let tree = newImage('./assets/tree.png', '200px', '300px');
let pillar = newImage('./assets/pillar.png', '350px', '100px');
let crate = newImage('./assets/crate.png', '150px', '200px');
let well = newImage('./assets/well.png', '500px', '425px');

let sword = newImage('./assets/sword.png', '500px', '405px');
newItem(sword);
let shield = newImage('assets/shield.png', '165', '185px');
newItem(shield)
let staff = newImage('assets/staff.png','600px','100px');
newItem(staff)

