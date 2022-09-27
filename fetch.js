const handleFetch = url => {
    return fetch(url).then(handleError);
}

const handleError = (res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res;
}

const averiguarPais = nombre => {
    let url = `https://api.nationalize.io/?name=${nombre}`;
    handleFetch(url)
        .then(res => res.json())
        .then(resJSON => {
            let paisMasProb = resJSON.country.reduce((a, b) => {
                return a.probability > b.probability ? a : b
            }, 0);
            alert(`Pais más probable: ${paisMasProb.country_id}`);
        })
        .catch(err => {
            alert(err);
        });
};

let nombre = prompt("¿Cual es tu nombre?");
averiguarPais(nombre);