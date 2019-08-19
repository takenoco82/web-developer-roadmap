export class App {
    constructor() {
        console.log("App initilized");
    }

    mount() {
        console.log("mount");
        const userinfoElement = document.querySelector("#userinfo");

        this.getUserInfo().then(userInfo => {
            console.log(userInfo);

            const view = this.escapeHtml`
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

    escapeSpecialChars(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    escapeHtml(strings, ...values) {
        return strings.reduce((result, str, i) => {
            const value = values[i - 1];
            if (typeof value === "string") {
                return result + this.escapeSpecialChars(value) + str;
            } else {
                return result + String(value) + str;
            }
        });
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
