function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const head = document.getElementById("head");
const general = document.getElementById("general");
const science = document.getElementById("science");
const health = document.getElementById("health");
const business = document.getElementById("business");
const sports = document.getElementById("sport");
const entertainment = document.getElementById("entertainment");
const technology = document.getElementById("technology");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

window.onload =function() {
    newsType.innerHTML="<h2>SELECT NEWS FROM ABOVE OPTIONS</h2>";  
};

var newsDataArr = [];
  
head.addEventListener("click",function(){
    newsType.innerHTML="<h1>HEADLINES</h1>";
    const fetchHeadlines = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=269dce53e3cb4044bdcdb85f8be44d8a");
        newsDataArr = [];
        if(response.status>=200 && response.status<300) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
        } else {
            console.log(response.status, response.statusText);
            newsdetails.innerHTML = "<h5>ERROR</h5>"
            return;
        }

        displayNews();
    }
    fetchHeadlines();
});

general.addEventListener("click",function(){
    newsType.innerHTML="<h1>GENERAL</h1>";
    const fetchGeneralNews = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=269dce53e3cb4044bdcdb85f8be44d8a");
        newsDataArr = [];
        if(response.status>=200 && response.status<300) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
        } else {
            console.log(response.status, response.statusText);
            newsdetails.innerHTML = "<h5>ERROR</h5>"
            return;
        }
    
        displayNews();
    }
    fetchGeneralNews();
});

science.addEventListener("click",function(){
    newsType.innerHTML="<h1>SCIENCE</h1>";
    const fetchScienceNews = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=269dce53e3cb4044bdcdb85f8be44d8a");
        newsDataArr = [];
        if(response.status>=200 && response.status<300) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
        } else {
            console.log(response.status, response.statusText);
            newsdetails.innerHTML = "<h5>ERROR</h5>"
            return;
        }
    
        displayNews();
    }
    fetchScienceNews();
});

health.addEventListener("click",function(){
    newsType.innerHTML="<h1>HEALTH</h1>";
    const fetchHealthNews = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=269dce53e3cb4044bdcdb85f8be44d8a");
        newsDataArr = [];
        if(response.status>=200 && response.status<300) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
        } else {
            console.log(response.status, response.statusText);
            newsdetails.innerHTML = "<h5>ERROR</h5>"
            return;
        }
        displayNews();
    }
    fetchHealthNews();
});

business.addEventListener("click",function(){
    newsType.innerHTML="<h1>BUSINESS</h1>";
    const fetchBusinessNews = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=269dce53e3cb4044bdcdb85f8be44d8a");
        newsDataArr = [];
        if(response.status>=200 && response.status<300) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
        } else {
            console.log(response.status, response.statusText);
            newsdetails.innerHTML = "<h5>ERROR</h5>"
            return;
        }
    
        displayNews();
    }
    fetchBusinessNews();
});

sports.addEventListener("click",function(){
    newsType.innerHTML="<h1>SPORTS</h1>";
    const fetchSportsNews = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=269dce53e3cb4044bdcdb85f8be44d8a");
        newsDataArr = [];
        if(response.status>=200 && response.status<300) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
        } else {
            console.log(response.status, response.statusText);
            newsdetails.innerHTML = "<h5>ERROR</h5>"
            return;
        }
    
        displayNews();
    }
    fetchSportsNews();
});

technology.addEventListener("click",function(){
    newsType.innerHTML="<h1>TECHNOLOGY</h1>";
    const fetchTechnologyNews = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=269dce53e3cb4044bdcdb85f8be44d8a");
        newsDataArr = [];
        if(response.status>=200 && response.status<300) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
        } else {
            console.log(response.status, response.statusText);
            newsdetails.innerHTML = "<h5>ERROR</h5>"
            return;
        }
    
        displayNews();
    }
    fetchTechnologyNews();
});

entertainment.addEventListener("click",function(){
    newsType.innerHTML="<h1>ENTERTAINMENT</h1>";
    const fetchEntertainmentNews = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=269dce53e3cb4044bdcdb85f8be44d8a");
        newsDataArr = [];
        if(response.status>=200 && response.status<300) {
            const myJson = await response.json();
            console.log(myJson);
            newsDataArr = myJson.articles;
        } else {
            console.log(response.status, response.statusText);
            newsdetails.innerHTML = "<h5>ERROR</h5>"
            return;
        }
    
        displayNews();
    }
    fetchEntertainmentNews();
});

function displayNews() {

    newsdetails.innerHTML = "";

    if(newsDataArr.length == 0) {
        newsdetails.innerHTML = "<h5>ERROR</h5>"
        return;
    }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className="card";

        var card = document.createElement('div');

        var image = document.createElement('img');
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var text = document.createElement('div');
        
        var dateHeading = document.createElement('h5');
        dateHeading.innerHTML = date[0];

        var newsHeading = document.createElement('h1');
        newsHeading.innerHTML = news.title;

        var desc = document.createElement('h4');
        desc.innerHTML = news.description;

        var link = document.createElement('a');
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        text.appendChild(dateHeading);
        text.appendChild(newsHeading);
        text.appendChild(desc);
        text.appendChild(link);

        card.appendChild(image);
        card.appendChild(text);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
}
