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
        "gatsby-plugin-tsconfig-paths",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-plugin-html-attributes",
            options: {
                lang: "en",
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Panda Pre-School Playgroup",
                short_name: "Panda Playgroup",
                icon: "src/images/icon.png",
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
        "gatsby-plugin-offline",
    ],
};

export default config;
