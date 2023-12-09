import { graphql, useStaticQuery } from "gatsby";

const useFundraisingImages = (): Queries.ContentfulAsset[] => {
    const data = useStaticQuery(graphql`
        {
            allContentfulAsset(filter: { title: { glob: "Fundraising*" } }) {
                nodes {
                    title
                    description
                    url
                    gatsbyImageData(height: 520, width: 400, placeholder: BLURRED)
                }
            }
        }
    `);

    return data.allContentfulAsset.nodes;
};

export { useFundraisingImages };
