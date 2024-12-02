import { FC } from "react";
import { Link, graphql } from "gatsby";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Committee";

interface CommitteePageProps {
    data: Queries.Query;
}

const CommitteePage: FC<CommitteePageProps> = ({ data }: CommitteePageProps) => {
    const personList: Queries.Maybe<Queries.ContentfulPersonList> = data.contentfulPersonList;

    return (
        <Layout showHomeLink activeSection="Our team" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    Panda Preschool Playgroup is run by a management committee of parents, carers and other volunteers
                    who take care of all the bits you don&apos;t see, such as paying rent and wages, funding, press,
                    marketing, and fundraising activities.
                </p>
                <p>
                    Volunteering as a Trustee member of the committee is a challenging task, but one that is rewarding
                    in so many ways. Our volunteers gain valuable experience of all aspects of running a charity, as
                    well as the social side of being part of a team. If you think you could be a key part of running our
                    great playgroup, or you could offer a few hours to help us out, then please{" "}
                    <Link to="/vacancies">get in touch</Link>.
                </p>
                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Our Committee of Trustees
                </h3>
                <ul>
                    {personList?.people?.map((person: Queries.Maybe<Queries.ContentfulPerson>) => (
                        <li key={person?.id}>
                            {person?.name} - {person?.title}
                        </li>
                    ))}
                </ul>
            </Article>
        </Layout>
    );
};

export default CommitteePage;

export const Head = () => <PageHead pageTitle={heading} />;

export const query = graphql`
    {
        contentfulPersonList(name: { eq: "Committee" }) {
            people {
                id
                name
                title
            }
        }
    }
`;
