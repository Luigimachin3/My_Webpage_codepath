

let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

let signButton = document.getElementById('signNowButton');

const addSignature = () => {
    let name = document.getElementById('name');
    let hometown = document.getElementById('hometown');

    let para = document.createElement('p');
    let node = document.createTextNode("🖊️" + name.value + " from " + hometown.value + " supports this! ");

    let signatures = document.getElementById("yourSignature");

    para.appendChild(node);

    signatures.appendChild(para);
}



const validateForm = () => {

    let containsErrors = false;

    var petitionInputs = document.getElementById("sign-petition").elements;
    const email = document.getElementById('email')

    for (let i = 0; i < petitionInputs.length; i++) {
        if (petitionInputs[i].value.length < 2) {
            petitionInputs[i].classList.add('error');
            containsErrors = true;
        }
        else {
            petitionInputs[i].classList.remove('error');
        }
    }

    if (containsErrors == false) {
        if (!email.value.includes('.com') && !email.value.includes('.edu') || !email.value.includes('@')) {
            containsErrors = true;
            email.classList.add('error');
            alert("Please, enter a valid email");
        }

        else {
            addSignature();
            for (let i = 0; i < petitionInputs.length; i++) {
                petitionInputs[i].value = "";
                containsErrors = false;
            }
        }

    }



}
signButton.addEventListener('click', validateForm);



const getBooks = () => {
    const proxyURL = "https://cp-proxy1.herokuapp.com/";
    const olQueryURL = "https://openlibrary.org/works/"
    const bookId = "OL27516583M"
    const bulletTrainURL = proxyURL + olQueryURL + bookId + ".json";

    let title1 = document.createElement("a");
    title1.setAttribute("href", "https://openlibrary.org/works/OL27516583M/Animal_Shelters");
    document.getElementById("title1").appendChild(title1);

    let publishers = document.createElement("p");
    document.getElementById("publishers").appendChild(publishers);

    let isbnOne = document.createElement("p");
    document.getElementById("isbn").appendChild(isbnOne);

    fetch(bulletTrainURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            title1.innerHTML = data.title;
            publishers.innerHTML = data.publishers;
            isbnOne.innerHTML = data.isbn_13;
        });
}
getBooks();

const getBooksTwo = () => {
    const proxyURL = "https://cp-proxy1.herokuapp.com/";
    const olQueryURL = "https://openlibrary.org/works/"
    const bookId = "OL1896785M"
    const bulletTrainURL = proxyURL + olQueryURL + bookId + ".json";

    let title2 = document.createElement("a");
    title2.setAttribute("href", "https://openlibrary.org/works/OL18245402W/Overpopulation_of_cats_and_dogs");
    document.getElementById("title2").appendChild(title2);

    let publishersTwo = document.createElement("p");
    document.getElementById("publishersTwo").appendChild(publishersTwo);

    let isbnTwo = document.createElement("p");
    document.getElementById("isbnTwo").appendChild(isbnTwo);

    fetch(bulletTrainURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            title2.innerHTML = data.title;
            publishersTwo.innerHTML = data.publishers;
            isbnTwo.innerHTML = data.isbn_10;
        });
}
getBooksTwo();



const getBooksThree = () => {
    const proxyURL = "https://cp-proxy1.herokuapp.com/";
    const olQueryURL = "https://openlibrary.org/works/"
    const bookId = "OL24912370M"
    const bulletTrainURL = proxyURL + olQueryURL + bookId + ".json";

    let title3 = document.createElement("a");
    title3.setAttribute("href", "https://openlibrary.org/works/OL16008580W/Redemption");
    document.getElementById("title3").appendChild(title3);

    let publishersThree = document.createElement("p");
    document.getElementById("publishersThree").appendChild(publishersThree);

    let isbnThree = document.createElement("p");
    document.getElementById("isbnThree").appendChild(isbnThree);

    fetch(bulletTrainURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            title3.innerHTML = data.title;
            publishersThree.innerHTML = data.publishers;
            isbnThree.innerHTML = data.isbn_10;
        });
}
getBooksThree();


const apiKey = "qtX3ZGuW5z-9reO4OeSRcWRIgchyvtyOjBM8uz8epy7a5yYa";
const keywords = 'animal shelter';
const url = 'https://api.currentsapi.services/v1/search?apiKey=' + apiKey + '&keywords=' + keywords;

const getAndDisplayNews = async () => {
    // Fetches News articles
    const response = await fetch(url);
    // Contains JavaScript objects with news articles
    const data = await response.json();
    // Parses the data and assigns the news article array from the objects
    const news = data.news;

    console.log(news);

    for (let i = 0; i < 5; i++) {
        const title = document.createElement('h3');
        title.textContent = news[i].title;

        const description = document.createElement('p');
        description.textContent = news[i].description;

        const link = document.createElement('a');
        link.setAttribute("href", news[i].url);
        link.textContent = "click here for more";

        const article = document.createElement('article');
        article.appendChild(title);
        article.appendChild(description);
        article.appendChild(link);

        const newsDiv = document.getElementById('news');
        newsDiv.appendChild(article);
    }
}
getAndDisplayNews();

// Wifi in New York
// fetch('https://data.cityofnewyork.us/resource/varh-9tsp.json')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         let wifiInfo = data[0];
//         // Create a paragraph element <p> and assign it to a variable called wifiLocation:
//         let wifiLocation = document.createElement('p');

//         //Set its class to 'wifi-location'
//         wifiLocation.className = "wifi-location";

//         //Set its textContent property to a string containing the city and location
//         wifiLocation.textContent = "📍 WiFi Available in " + wifiInfo.city + " at " + wifiInfo.location;
//         //Append wifiLocation to the WiFi div
//         document.querySelector(".wifi").appendChild(wifiLocation)
//     });








