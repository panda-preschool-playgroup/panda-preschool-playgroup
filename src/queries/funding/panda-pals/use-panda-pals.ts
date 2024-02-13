import { graphql, useStaticQuery } from "gatsby";

const usePandaPals = (): Queries.ContentfulLinkListConnection => {
    const data = useStaticQuery(graphql`
        {
            allContentfulLinkList(filter: { title: { regex: "/Panda Pals/" } }) {
                nodes {
                    title
                    links {
                        id
                        text
                        url
                    }
                }
            }
        }
    `);

    return data.allContentfulLinkList;
};

export { usePandaPals };
