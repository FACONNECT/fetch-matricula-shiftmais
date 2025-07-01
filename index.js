function sendData(url, fetchOptions) {
    console.log(fetchOptions);
    
    fetch(url, fetchOptions)
        .then(response => {
            if (!response.ok) {
                console.log(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}