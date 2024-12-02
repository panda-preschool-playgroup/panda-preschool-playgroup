import { FC } from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import StaffSection from "@/components/our-team/staff/staff-section";

const heading = "Staff";

interface StaffPageProps {
    data: Queries.Query;
}

const StaffPage: FC<StaffPageProps> = ({ data }: StaffPageProps) => {
    const personList: Queries.Maybe<Queries.ContentfulPersonList> = data.contentfulPersonList;

    return (
        <Layout showHomeLink activeSection="Our team" pageHeading={heading}>
            <Article heading={heading}>
                <p className="pb-12">
                    Panda Preschool Playgroup has an exemplary team of qualified, dedicated staff, all of whom have
                    received training in First Aid, Food Hygiene and Safeguarding Children, which they update every
                    three years. In addition, they carry out annual training to meet statutory requirements for
                    delivering the Early Years Foundation Stage to a high standard. Our caring and dedicated staff are
                    always approachable if you need a chat!
                </p>
            </Article>
            {personList?.people?.length &&
                personList.people.map((person: Queries.Maybe<Queries.ContentfulPerson>, index) => (
                    <StaffSection
                        key={person?.id}
                        style={index % 2 === 0 ? "alt" : "standard"}
                        name={person?.name ?? ""}
                        title={person?.title ?? ""}
                        image={person?.profilePicture}
                    >
                        {person?.description && renderRichText(person.description)}
                    </StaffSection>
                ))}
        </Layout>
    );
};

export default StaffPage;

export const Head = () => <PageHead pageTitle={heading} />;

export const query = graphql`
    {
        contentfulPersonList(name: { eq: "Staff" }) {
            people {
                id
                name
                title
                description {
                    raw
                }
                profilePicture {
                    title
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
        }
    }
`;
