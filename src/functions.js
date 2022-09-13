import { BASE_URL } from "./constants";
let AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmRmYmI2YTc2OTk5ZGM2NGEzODA0NSIsImVtYWlsIjoiaG9wZWZ1bC5yYXpAZ21haWwuY29tIiwiaWF0IjoxNjYxMTU4Mzk1fQ.Vnks0hVtthfsxoBt9yI_ok0oVM0XEhyL9eq8hPwSIoQ';
function getAllAds(setAllAds) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': AUTH_TOKEN },
    };

    fetch(BASE_URL + 'ads', requestOptions)
        .then((response) => response.json())
        .then(data => {
            setAllAds(data.ads);
        })
}

function showInterest(adId, setAllAds) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Authorization': AUTH_TOKEN }
    };
    fetch(BASE_URL + 'ads/buy/' + adId + '/' + localStorage.getItem('userId'), requestOptions)
        .then(response => {
            return response.text();
        })
        .then(msg => alert(msg))
        .catch(error => console.log(error));
}

export { showInterest, getAllAds };