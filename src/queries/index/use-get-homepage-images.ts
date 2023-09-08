import { graphql, useStaticQuery } from "gatsby";

const useGetHomepageImages = (): Queries.ContentfulAsset[] => {
    const data = useStaticQuery(graphql`
        {
            allContentfulAsset(filter: { title: { glob: "Homepage*" } }) {
                nodes {
                    title
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
        }
    `);

    return data.allContentfulAsset.nodes;
};

export { useGetHomepageImages };
