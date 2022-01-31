// // // local storage variables // // // 
var searchBtn = document.querySelector("#search-btn");
var locationInput = document.querySelector("#location");
var recentSearches = document.querySelector("#city-searches");
var currentWeather = document.querySelector("#current-weather");
var currentForecast = document.querySelector("#current-forecast");

var formSubmitHandler = function (event) {
    event.preventDefault();

    city = locationInput.value.trim();
    searchHistory.push(city);
    saveSearch();
    loadSearch();
}

var saveSearch = function() {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}

var loadSearch = function() {
    searchHistory = JSON.parse(getItem("searchHistory"));
    if (!searchHistory) {
        return false;
    }
};

searchBtn.addEventListener("click", formSubmitHandler);