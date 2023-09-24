import { graphql, useStaticQuery } from "gatsby";

const useHomepageImages = (): Queries.ContentfulAsset[] => {
    const data = useStaticQuery(graphql`
        {
            allContentfulAsset(filter: { title: { glob: "Homepage*" } }) {
                nodes {
                    title
                    description
                    gatsbyImageData(height: 520, width: 400, placeholder: BLURRED)
                }
            }
        }
    `);

    return data.allContentfulAsset.nodes;
};

export { useHomepageImages };
