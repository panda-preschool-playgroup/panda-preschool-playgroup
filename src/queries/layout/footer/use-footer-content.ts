import { graphql, useStaticQuery } from "gatsby";

const useFooterContent = (): Queries.ContentfulFooter => {
    const data = useStaticQuery(graphql`
        {
            contentfulFooter(name: { eq: "Footer Content" }) {
                emailAddress
                phoneNumber
                facebookLinks {
                    contentful_id
                    text
                    url
                }
            }
        }
    `);

    return data.contentfulFooter;
};

export { useFooterContent };
