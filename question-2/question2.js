function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: "delayed success!" });
        }, 500);
    });
}

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));
    

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: "delayed exception!" });
        }, 500);
    });
}

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));
