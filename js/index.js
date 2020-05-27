

 fetch('./users.json')
    .then(response => {
        return response.json()
    })
    // .then((appendHeader))
     .then((showUsers))
    .catch(console.error);

 fetch('./users.json')
     .then(response => {
         return response.json()
     })
     .then((appendHeader))
    // .then((showUsers))
     .catch(console.error);




 /*

  let requestURL = './users.json';
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {         // как записать это через фетч
      const users = request.response;
      Header(users);
      showUsers(users);
  }
 */
const header = document.querySelector('header');
const section = document.querySelector('section');




function appendHeader(jsonObj) {
    let myH1 = document.createElement('h1');
    myH1.textContent= jsonObj[0]["name"];
    header.appendChild(myH1);

    let myP = document.createElement('p');
    myP.textContent= 'first string is ' + jsonObj[0]['name'];
    header.appendChild(myP);

}

function showUsers(jsonObj) {
    const users = jsonObj;

    for (let i = 0; i < users.length; i++) {
        var article = document.createElement('article');
        var myH2 = document.createElement('h2');
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var p3 = document.createElement('p');
        //let list = document.createElement('ul');

        myH2.textContent = users[i].name;
        p1.textContent = 'surname is ' + users[i].surname;
        p2.textContent = 'age is ' + users[i].age;
        p3.textContent = ' isMale ' + users[i].isMale;


        article.appendChild(myH2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        section.appendChild(article);
    }
}

















