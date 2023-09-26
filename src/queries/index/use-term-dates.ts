import { graphql, useStaticQuery } from "gatsby";

const useTermDates = (): Queries.ContentfulTermDates => {
    const data = useStaticQuery(graphql`
        {
            contentfulTermDates(name: { eq: "Term Dates" }) {
                academicYear
                terms {
                    id
                    name
                    firstHalf
                    secondHalf
                }
            }
        }
    `);

    return data.contentfulTermDates;
};

export { useTermDates };
