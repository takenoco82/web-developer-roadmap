export class App {
    constructor() {
        console.log("App initialized");
    }

    mount() {
        console.debug("mount");
        document.addEventListener("DOMContentLoaded", () => {
            this.handleLoaded();
        });
    }

    handleLoaded() {
        const reposElement = document.querySelector("#repos");
        this.searchRepositries().then(repositries => {
            repositries.forEach(repositry => {
                console.debug(repositry);
                const html = `<li><a href="${repositry.html_url}">${repositry.name}</a> (⭐${repositry.stargazers_count})</li>`
                const liElement = this.html2Element(html);
                reposElement.appendChild(liElement);
            });
        });
    }

    // GitHubからStarの多いリポジトリを取得する
    searchRepositries(limit = 10) {
        console.debug("searchRepositries");

        return fetch(this.searchRepositriesUrl(limit))
            .then(response => {
                console.debug("status:", response.status);

                if (!response.ok) {
                    throw new Error(`HTTP Status Error: ${response.status}`)
                }
                return response.json()
            })
            .then(body => body.items);
    }

    searchRepositriesUrl(limit = 10) {
        const baseUrl = "https://api.github.com/search/repositories"
        const params = new URLSearchParams();
        params.append("q", "stars:>1");
        params.append("type", "Repositories");
        params.append("sort", "stars");
        params.append("order", "desc");
        params.append("page", "1");
        params.append("per_page", limit);
        return `${baseUrl}?${params.toString()}`
    }

    // html文字列からノードに変換する
    html2Element(html) {
        const template = document.createElement("template");
        template.innerHTML = html;
        return template.content.firstElementChild;
    }
}
