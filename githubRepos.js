function fetchRepositories() {
    let username = document.getElementById("username").value;
    if (username === "") {
        alert("Please enter a GitHub username");
        return;
    }
    let url = `https://api.github.com/users/${username}/repos`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let tableBody = document.querySelector("#repoTable tbody");
        tableBody.innerHTML = "";

        data.forEach(repo => {
            let row = `
                <tr>
                    <td><a href="${repo.html_url}" target="_blank">${repo.name}</a></td>
                    <td>${repo.description || "No description"}</td>
                    <td>${repo.language || "N/A"}</td>
                    <td>${repo.stargazers_count}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.log("Error fetching repositories:", error));
}