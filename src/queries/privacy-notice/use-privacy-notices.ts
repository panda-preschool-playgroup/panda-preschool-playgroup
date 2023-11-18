import { graphql, useStaticQuery } from "gatsby";

const usePrivacyNotices = (): readonly Queries.ContentfulAsset[] => {
    const data = useStaticQuery<Queries.Query>(graphql`
        {
            allContentfulAsset(filter: { title: { glob: "*Privacy Notice" } }) {
                nodes {
                    id
                    title
                    url
                }
            }
        }
    `);

    return data.allContentfulAsset.nodes;
};

export { usePrivacyNotices };
