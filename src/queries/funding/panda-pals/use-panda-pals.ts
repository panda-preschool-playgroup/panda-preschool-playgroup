import { graphql, useStaticQuery } from "gatsby";

const usePandaPals = (): Queries.ContentfulLinkList => {
    const data = useStaticQuery(graphql`
        {
            contentfulLinkList(title: { eq: "Panda Pals" }) {
                links {
                    id
                    text
                    url
                }
            }
        }
    `);

    return data.contentfulLinkList;
};

export { usePandaPals };
