# Ng Wee Seng - Resume Website

Personal resume and technical portfolio for Ng Wee Seng, hosted at [akimori-236.github.io](https://akimori-236.github.io).

## Local development

Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and Bundler, then run:

```powershell
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000` in a browser.

## Editing content

Resume content lives in [`_data/profile.yml`](_data/profile.yml). Update the contact placeholders and add future projects there. Add GitHub repository URLs to `repository_urls` and the site will load their public descriptions automatically. A manually curated project entry uses this shape:

```yaml
projects:
	- name: "Project name"
		type: "Web application"
		description: "Short project description."
		url: "https://github.com/your-username/repository"

repository_urls:
	- "https://github.com/your-username/repository"
```

The site is intentionally web-only for now. The GitHub Actions workflow deploys the `main` branch to GitHub Pages.
