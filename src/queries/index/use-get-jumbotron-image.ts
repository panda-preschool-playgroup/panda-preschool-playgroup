import { graphql, useStaticQuery } from "gatsby";

const useGetJumbotronImage = (): Queries.ContentfulAsset => {
    const data = useStaticQuery(graphql`
        {
            contentfulAsset(title: { eq: "Homepage Background" }) {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
        }
    `);

    return data.contentfulAsset;
};

export { useGetJumbotronImage };
