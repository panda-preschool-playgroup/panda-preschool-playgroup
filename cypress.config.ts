import { defineConfig } from "cypress";

export default defineConfig({
    projectId: "4d1vz9",
    fixturesFolder: false,
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    e2e: {
        baseUrl: "http://localhost:9000",
    },
    retries: 2,
});
