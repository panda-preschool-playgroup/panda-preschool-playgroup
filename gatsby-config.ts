import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Panda Pre-School Playgroup",
        siteUrl: "https://www.pandaplaygroup.co.uk",
    },
    graphqlTypegen: {
        typesOutputPath: "src/types/gatsby-types.d.ts",
    },
    plugins: [],
};

export default config;
