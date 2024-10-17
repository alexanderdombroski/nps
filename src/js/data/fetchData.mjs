
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

async function fetchParkData(code = "yell") {
    const parkData = await fetchData(`parks?parkCode=${code}`);
    return parkData.data[0];
}

async function fetchAlertData(code = "yell") {
    const alertData = await fetchData(`alerts?parkCode=${code}`);
    return alertData.data;
}

export { fetchData as default, fetchParkData, fetchAlertData } 