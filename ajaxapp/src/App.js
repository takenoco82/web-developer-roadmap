export class App {
    constructor() {
        console.log("App initilized");
    }

    mount() {
        console.log("mount");
        const userinfoElement = document.querySelector("#userinfo");

        this.getUserInfo().then(userInfo => {
            console.log(userInfo);

            const view = `
            <h4>${userInfo.name} (@${userInfo.login})</h4>
            <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
            <dl>
                <dt>Location</dt>
                <dd>${userInfo.location}</dd>
                <dt>Repositories</dt>
                <dd>${userInfo.public_repos}</dd>
            </dl>
            `
            userinfoElement.innerHTML = view;
        })
    }

    getUserInfo() {
        const userId = "js-primer-example";
        const url = `https://api.github.com/users/${userId}`;
        return fetch(url).then(response => {
            console.debug(response.status);
            if (!response.ok) {
                throw new Error(`HTTP Status: ${response.status}`)
            }
            return response.json();
        }).catch(error => {
            throw new Error(error.message);
        });
    }
}
