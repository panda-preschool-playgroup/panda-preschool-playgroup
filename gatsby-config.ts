import type { GatsbyConfig } from "gatsby";
import "dotenv/config";

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Panda Preschool Playgroup",
        siteUrl: "https://www.pandaplaygroup.co.uk",
        description:
            "Panda Preschool Playgroup is a registered charity that offers pre-school and stay and play sessions, situated in the village of Copmanthorpe just outside the city of York, UK",
    },
    graphqlTypegen: {
        typesOutputPath: "src/types/gatsby-types.d.ts",
    },
    plugins: [
        "gatsby-plugin-tsconfig-paths",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                environment: process.env.CONTENTFUL_ENV,
            },
        },
        {
            resolve: "gatsby-plugin-html-attributes",
            options: {
                lang: "en",
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Panda Preschool Playgroup",
                short_name: "Panda Preschool Playgroup",
                icon: "src/images/logo.png",
                icon_options: {
                    purpose: "any maskable",
                },
                start_url: "/",
                background_color: "#fdfdfd",
                theme_color: "#6ccb55",
                display: "standalone",
                cache_busting_mode: "none",
            },
        },
        "gatsby-plugin-remove-serviceworker",
    ],
};

export default config;
