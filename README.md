# Thomas Bruys — personal website

🌐 **Live site: <https://thomasbruys.github.io/>**

Built with [Jekyll](https://jekyllrb.com/) and deployed to GitHub Pages by `.github/workflows/publish.yaml` on every push to `main`.

## Editing content

All content lives in `_data/` — no HTML needed:

| File | Section |
| --- | --- |
| `_data/profile.yml` | Name, bio, photo, links, research interests, stats |
| `_data/publications.yml` | Publications (`T. Bruys` is auto-highlighted) |
| `_data/experience.yml` | Experience timeline |
| `_data/projects.yml` | Selected projects |
| `_data/teaching.yml` | Teaching & mentoring |
| `_data/education.yml` / `_data/skills.yml` | Education and skills |

The CV is served from `static/uploads/CV_Thomas_Bruys.pdf`; replace that file to update it.
Styles are in `assets/css/main.scss` (colors are CSS variables at the top).

## Local preview

```sh
brew install ruby                       # once; Jekyll needs Ruby >= 3
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --livereload   # http://localhost:4000
```
