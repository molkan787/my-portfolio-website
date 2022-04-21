export default class Utils{

    static postJSON(url, object){
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if(xhr.status === 404){
                    reject('ERROR_404')
                }else if (xhr.readyState === 4 && xhr.status === 200) {
                    try {
                        const resp = JSON.parse(xhr.responseText);
                        resolve(resp)
                    } catch (error) {
                        reject(error)
                    }
                }
            };
            xhr.onerror = err => reject(err)
            xhr.addEventListener('error', err => reject(err));
            xhr.addEventListener('abort', err => reject(err));
            const data = JSON.stringify(object)
            xhr.send(data);
        })
    }

    static ValidateEmail(mail){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    }

}