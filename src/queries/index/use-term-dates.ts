import { graphql, useStaticQuery } from "gatsby";

const useTermDates = (): Queries.ContentfulTermDates => {
    const data = useStaticQuery(graphql`
        {
            contentfulTermDates(name: { eq: "Term Dates" }) {
                terms {
                    id
                    name
                    start
                    lastDayBeforeHalfTerm
                    firstDayAfterHalfTerm
                    end
                }
            }
        }
    `);

    return data.contentfulTermDates;
};

export { useTermDates };
