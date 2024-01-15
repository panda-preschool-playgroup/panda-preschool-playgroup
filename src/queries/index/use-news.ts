import { graphql, useStaticQuery } from "gatsby";

const useNews = (): Queries.Maybe<Queries.ContentfulNews> => {
    const data = useStaticQuery<Queries.Query>(graphql`
        {
            contentfulNews(name: { eq: "News" }) {
                isPublished
                lastUpdated
                text {
                    raw
                }
            }
        }
    `);

    return data.contentfulNews;
};

export { useNews };
