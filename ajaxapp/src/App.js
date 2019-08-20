export class App {
    constructor() {
        console.log("App initilized");
    }

    mount() {
        console.log("mount");
        document.addEventListener("DOMContentLoaded", () => {
            const getUserinfoButton = document.querySelector("#getUserInfo");
            getUserinfoButton.addEventListener("click", () => {
                this.handleGetUserInfoButton();
            });
        });
    }

    async handleGetUserInfoButton() {
        const userIdElement = document.querySelector("#userId");

        try {
            const userInfo = await this.getUserInfo(userIdElement.value);
            console.debug(userInfo);
            const view = this.createView(userInfo);
            this.displayView(view);
        } catch (error) {
            console.error(error.message);
        }
    }

    createView(userInfo) {
        return this.escapeHtml`
            <h4>${userInfo.name} (@${userInfo.login})</h4>
            <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
            <dl>
                <dt>Location</dt>
                <dd>${userInfo.location}</dd>
                <dt>Repositories</dt>
                <dd>${userInfo.public_repos}</dd>
            </dl>
            `;
    }

    displayView(view) {
        const userinfoElement = document.querySelector("#userinfo");
        userinfoElement.innerHTML = view;
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

    getUserInfo(userId) {
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
