import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Panda Pre-School Playgroup",
        siteUrl: "https://www.pandaplaygroup.co.uk",
        description:
            "Panda Pre-School Playgroup is a registered charity situated in the village of Copmanthorpe just outside the city of York, UK",
    },
    graphqlTypegen: {
        typesOutputPath: "src/types/gatsby-types.d.ts",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-html-attributes",
            options: {
                lang: "en",
            },
        },
    ],
};

export default config;
