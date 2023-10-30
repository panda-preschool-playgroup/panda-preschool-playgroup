import { graphql, useStaticQuery } from "gatsby";

const useStickyMittsTinyTotsImage = (): Queries.ContentfulAsset => {
    const data = useStaticQuery(graphql`
        {
            contentfulAsset(title: { eq: "Sticky Mitts" }) {
                title
                gatsbyImageData(height: 240, width: 240, placeholder: BLURRED)
            }
        }
    `);

    return data.contentfulAsset;
};

export { useStickyMittsTinyTotsImage };
