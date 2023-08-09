# Branching

Create a new branch using the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) style e.g.

`feat/add-carousel`

`ci/update-deployment-workflow`

# Committing

Commit messages should follow the conventional commit style e.g.

`feat: add image carousel on homepage`

`docs: add contribution guidelines`

This is enforced by [commitlint](https://github.com/conventional-changelog/commitlint/). Valid types are:

```javascript
["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"];
```

# Merging

Raise a pull request against the `main` branch. Once all checks pass, you can merge!

# Deploying

Deployment is triggered automatically whenever a change is merged to `main` 🎉
