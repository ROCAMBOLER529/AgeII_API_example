const getPersonaByID = id => {
    return new Promise((resolve, reject) => {
        console.log(`Vamos a buscar ID ${id} en la BD, Paciencia...`);
        setTimeout(() => {
            if (id > 0) {
                const per = {id, nombre: "Pepe"};
                resolve(per);
            } else {
                const unError = {
                    error: true,
                    msg: `No se encontró persona con ID ${id}`
                }
                reject(unError);
            }
        }, 3000);
    })
}

getPersonaByID(4).then(res => {
    console.log("Mostrando resultados en 'then'", res);
}).catch(err => {
    console.err("Mostrando errores en 'catch'", err);
});
getPersonaByID(-1).then(res => {
    console.log("Mostrando resultados en 'then'", res);
}).catch(err => {
    console.err("Mostrando errores en 'catch'", err);
});