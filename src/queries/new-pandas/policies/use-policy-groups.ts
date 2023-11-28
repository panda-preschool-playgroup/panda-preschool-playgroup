import { graphql, useStaticQuery } from "gatsby";

const usePolicyGroups = (): readonly Queries.ContentfulPolicyGroup[] => {
    const data = useStaticQuery<Queries.Query>(graphql`
        {
            allContentfulPolicyGroup(sort: { policies: { title: ASC } }) {
                nodes {
                    id
                    title
                    policies {
                        id
                        title
                        publicUrl
                    }
                }
            }
        }
    `);

    return data.allContentfulPolicyGroup.nodes;
};

export { usePolicyGroups };
