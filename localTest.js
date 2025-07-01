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

//const endpoint = 'https://embaixadores-api.grupoconectadas.com.br/alunos'
const endpoint = 'http://localhost:8080/alunos'
const config = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
        "Authorization": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg3NzQ4NTAwMmYwNWJlMDI2N2VmNDU5ZjViNTEzNTMzYjVjNThjMTIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiR2FicmllbCBGb2dhw6dhIFNpbHZhIiwiZW1iYWl4YWRvciI6dHJ1ZSwidG9rZW4iOiJDQVAvS0dpbmV0dGkiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2lzdGVtYS1mYWNvbm5lY3QiLCJhdWQiOiJzaXN0ZW1hLWZhY29ubmVjdCIsImF1dGhfdGltZSI6MTc1MTM0MzcwNSwidXNlcl9pZCI6IjcwZWEyNjdlLWY2NzgtNDIxZS04ZmVjLTgwZGNmZmYzMWQyNyIsInN1YiI6IjcwZWEyNjdlLWY2NzgtNDIxZS04ZmVjLTgwZGNmZmYzMWQyNyIsImlhdCI6MTc1MTM0MzcwNSwiZXhwIjoxNzUxMzQ3MzA1LCJlbWFpbCI6ImdhYnJpZWwuc2lsdmFAZmFjb25uZWN0LmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaG9uZV9udW1iZXIiOiIrNTUxOTQ4MDQzMjQ1IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJnYWJyaWVsLnNpbHZhQGZhY29ubmVjdC5lZHUuYnIiXSwicGhvbmUiOlsiKzU1MTk0ODA0MzI0NSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.M0rBs9gsSitUPgX0a1Ke3rEPoNEW3jX0kFaDYRUCJw1l5oiTFwU-_n-i-fPmm_c6e_zSPxKnlIzdr1eVD8QIx4mTPtdv7Kp7PsmcwcO2ZFDKYFr3NMxGH_F8_f06NDxVj3FE15soN3IlJk6TDPg0vtiiR53nf6mpNHujgU9cba4ZqB6E5OxPV6RfY8LpUKB0Yz7TQfCe2AsY7LtZZBJvrETzdKj8sIqsvUCAGqmr8E04LUPeDpV7QdaTMmWsmNUU9lbUHD8jHqbASOoLrebK-lyApUrMcpKTb4dqASMQ9b6M3y9CnhaiTeDzr0b55fqSZnN9zp3_hrX_sYMMyEwTQA"
    },
    "body": {
        "cpf": "12345678910",
        "nome": "trthr",
        "dataNascimento": "11/11/1111",
        "email": "hrthrthrthr@segerger.com",
        "escolaridade": "Superior Incompleto",
        "tokenEmbaixador": "CAP/KGINETTI",
        "sexo": "M",
        "voucher": "",
        "endereco": {
            "estado": "MG",
            "municipio": "Passos",
            "bairro": "Jardim Vila Rica",
            "cep": "37901-044",
            "logradouro": "Avenida Expedicionários",
            "numero": null,
            "complemento": null
        },
        "telefones": [{ "ddd": 11, "numero": 940028922 }],
        "cursos": [
            {
                "tipo": "Pós-Graduação",
                "nome": "Afro-Brasilidade (Saberes e Práticas Inclusivas) - Educação (Pós-Graduação)",
                "matriz": "450h - 4 a 18 Meses",
                "turma": "Jul/2025 (450h)",
                "desconto": "50%",
                "parceiro": "Polo Conchas/SP - Cedicon",
                "preco": 1521
            }
        ],
        "formaPagamento": {
            "formaPagamento": "Boleto Bancário",
            "parcelas": "8",
            "entrada": 95.07,
            "valorTotalParcela": 190.13,
            "primeiroVencimento": "2025-07-08",
            "diaVencimento": 10,
            "desconto": 95.06,
            "valorFinalParcela": 95.07
        }
    }
}

sendData(endpoint, config);