import { graphql, useStaticQuery } from "gatsby";

const useTermDates = (): Queries.ContentfulTermDates => {
    const data = useStaticQuery(graphql`
        {
            contentfulTermDates(name: { eq: "Term Dates" }) {
                academicYear
                terms {
                    sys {
                        id
                    }
                    fields {
                        name {
                            en_US
                        }
                        firstHalf {
                            en_US
                        }
                        secondHalf {
                            en_US
                        }
                    }
                }
            }
        }
    `);

    return data.contentfulTermDates;
};

export { useTermDates };
