import { graphql, useStaticQuery } from "gatsby";

const useProspectus = (): Queries.Maybe<Queries.ContentfulAsset> => {
    const data = useStaticQuery<Queries.Query>(graphql`
        {
            contentfulAsset(title: { eq: "Panda Playgroup Prospectus" }) {
                publicUrl
            }
        }
    `);

    return data.contentfulAsset;
};

export { useProspectus };
