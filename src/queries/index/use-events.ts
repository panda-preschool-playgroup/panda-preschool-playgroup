import { graphql, useStaticQuery } from "gatsby";

const useEvents = (): Queries.ContentfulEvents => {
    const data = useStaticQuery(graphql`
        {
            contentfulEvents(name: { eq: "Events" }) {
                events {
                    id
                    name
                    date
                    url
                    image {
                        gatsbyImageData(height: 600, width: 600, placeholder: BLURRED)
                    }
                }
            }
        }
    `);

    return data.contentfulEvents;
};

export { useEvents };
