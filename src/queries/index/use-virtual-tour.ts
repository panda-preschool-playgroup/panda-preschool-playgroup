import { graphql, useStaticQuery } from "gatsby";

const useVirtualTour = (): Queries.Maybe<Queries.ContentfulVirtualTour> => {
    const data = useStaticQuery<Queries.Query>(graphql`
        {
            contentfulVirtualTour(name: { eq: "Virtual Tour" }) {
                isPublished
            }
        }
    `);

    return data.contentfulVirtualTour;
};

export { useVirtualTour };
