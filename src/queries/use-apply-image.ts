import { graphql, useStaticQuery } from "gatsby";

const useApplyImage = (): Queries.Maybe<Queries.ContentfulAsset> => {
    const data = useStaticQuery<Queries.Query>(graphql`
        {
            contentfulAsset(title: { eq: "Apply" }) {
                title
                gatsbyImageData(height: 520, width: 400, placeholder: BLURRED)
            }
        }
    `);

    return data.contentfulAsset;
};

export { useApplyImage };
