
const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

async function fetchData(resourcePath) {
    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey
        }
    }; 
    
    let data = {}
    const response = await fetch(baseUrl + resourcePath, options);
    
    if (response.ok) {
        data = await response.json();
    } else console.error(`${response.status}: ${response.statusText}`);

    return data;
}

async function fetchParkData() {
    const parkData = await fetchData("parks?parkCode=yell");
    return parkData.data[0];
}

export { fetchData as default, fetchParkData } 