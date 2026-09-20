(() => {
  const container = document.querySelector("#github-projects");
  if (!container) return;

  const urls = JSON.parse(container.dataset.repositories || "[]");
  const repositories = urls
    .map((url) => {
      const match = url.match(/github\.com\/([^/]+\/[^/#?]+)/i);
      return match ? match[1].replace(/\.git$/, "") : null;
    })
    .filter(Boolean);

  Promise.all(
    repositories.map((repository) =>
      fetch(`https://api.github.com/repos/${repository}`).then((response) => {
        if (!response.ok) throw new Error(`Could not load ${repository}`);
        return response.json();
      }),
    ),
  )
    .then((items) => {
      container.innerHTML = items
        .map(
          (repository) => `
      <article class="project-card">
        <p class="project-card__label">${repository.language || "PROJECT"}</p>
        <h3>${repository.name}</h3>
        <p>${repository.description || "A software project by Ng Wee Seng."}</p>
        <a href="${repository.html_url}" target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>
      </article>`,
        )
        .join("");
    })
    .catch(() => {
      container.innerHTML =
        '<div class="project-placeholder"><p>Projects are temporarily unavailable.</p><span>Repository links are still available in the profile data.</span></div>';
    });
})();
