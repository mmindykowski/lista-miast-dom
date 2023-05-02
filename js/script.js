let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];


for (let i=0; i< cities.length; i++ ) {
    console.log(cities[i]);
    let liElement = document.createElement('li');
    let txtNode = document.createTextNode(`${cities[i]}`);
    let attrNode = document.createAttribute('class');
    attrNode.value = 'city';
    let list = document.getElementById('list');
    list.appendChild(liElement);
    liElement.appendChild(txtNode);
    liElement.setAttributeNode(attrNode);
}

// let olElement = createElement('ol');
// let list1 = document.getElementsByTagName('body');
// list1.appendChild(olElement);