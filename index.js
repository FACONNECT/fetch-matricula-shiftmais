function sendData(url, fetchOptions) {
    var auxBody = JSON.stringify(fetchOptions.body);
    fetchOptions.body = auxBody;

    fetch(url, fetchOptions)
        .then(response => {
            if (!response.ok) {
                console.error('API Error:', response.status, response.statusText);
            
                return response.text().then(text => { console.log(text || response.statusText); });
            }

            // Verifica se a resposta tem um Content-Type de JSON
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                return response.json(); // Se for JSON, parseia como JSON
            } else {
                // Se não for JSON, lê como texto ou assume que é vazia
                console.warn('Response is not JSON, reading as text or assuming empty.');
                return response.text().then(text => text ? JSON.parse(text) : {}); // Tenta parsear como JSON se tiver texto, senão retorna um objeto vazio
            }
        })
}