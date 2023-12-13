import { graphql, useStaticQuery } from "gatsby";

const useSafeguardingPolicy = (): Queries.Maybe<Queries.ContentfulAsset> => {
    const data = useStaticQuery<Queries.Query>(graphql`
        {
            contentfulAsset(title: { eq: "Safeguarding Statement" }) {
                publicUrl
            }
        }
    `);

    return data.contentfulAsset;
};

export { useSafeguardingPolicy };
