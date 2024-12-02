# Panda Preschool Playgroup

## Introduction

This is the code that powers the website https://www.pandaplaygroup.co.uk, a charity-run children's playgroup situated in the village of Copmanthorpe near the city of York, UK.

It is a static site developed with [Gatsby](https://www.gatsbyjs.com/) and [TypeScript](https://www.typescriptlang.org/), using [Flowbite](https://flowbite.com/) as its design system and [Contentful](https://www.contentful.com/) as its CMS.

## Development

### Prerequisites

1. The version of Node.js listed in [`.nvmrc`](../.nvmrc)

2. A Google Chrome installation, to run Lighthouse locally

3. A `.env` file in your local directory with the following enviroment variables:

```
CONTENTFUL_SPACE_ID=
CONTENTFUL_ENV=
CONTENTFUL_ACCESS_TOKEN=
```

Values for these can be retrieved from the settings page when logged into Contentful with a Panda Preschool Playgroup account.

### Common commands

| Command                             | Description                                            |
| ----------------------------------- | ------------------------------------------------------ |
| `npm start`                         | Runs the application                                   |
| `npm run check`                     | Runs formatting, linting, type checking and unit tests |
| `npm run bs` and then `npm run e2e` | Runs end-to-end tests                                  |
| `npm run perf`                      | Runs performance tests                                 |

### Making changes

See the [Contribution Guidelines](./CONTRIBUTING.md).

### Deployment

Deployed on demand with each code change and CMS publish 🚀
