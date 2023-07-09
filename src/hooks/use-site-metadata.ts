import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = (): SiteMetadata => {
    const data = useStaticQuery<SiteMetadataQueryData>(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);

    return data.site.siteMetadata;
};

export { useSiteMetadata };
