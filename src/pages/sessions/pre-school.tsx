import { FC } from "react";
import { Link } from "gatsby";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Our pre-school";

const PreSchoolPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="Sessions" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    Our morning sessions run Monday to Friday, <strong>9:00am to 12:00pm</strong>. We then have lunch
                    club from <strong>12:00pm to 12:30pm</strong>, and the afternoon session runs from{" "}
                    <strong>12:30pm to 3:00pm</strong>.{" "}
                </p>
                <p>
                    We also offer an earlier <strong>8:30am</strong> start on request, and you can opt to{" "}
                    <strong>pick up your child earlier as well</strong>. Because we think it&apos;s important to offer
                    this flexibility,{" "}
                    <Link to="/new-pandas/fees">
                        fees are calculated at a flat rate based only on the hours you need
                    </Link>
                    .
                </p>
                <p>The preschool is open for registration and bookings and we&apos;d love to meet you!</p>
                <p>
                    From the age of two, children are eligible to join Panda Playgroup. The pre-school is registered
                    with <a href="https://reports.ofsted.gov.uk/provider/16/EY501461">OFSTED</a> and is a member of the
                    Early Years Alliance.
                </p>
                <p>
                    Our aim is to provide your child with the best support and care as they take their first steps
                    towards starting school. Children are encouraged to pursue their own interests through free play as
                    well as join in group activities such a snack, story and song time.
                </p>
                <p>
                    At Panda Playgroup we are trying our hardest to improve our environmental credentials. In line with
                    the Reduce, Reuse, Recycle methodology, Panda Playgroup has now used up the last of our glitter and
                    we do not plan on buying any more. If you&apos;d like to find out more about our environmental
                    commitments please consult the <Link to="/our-approach/green-panda">Green Panda</Link>.
                </p>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Getting involved
                </h3>
                <p>
                    We would love for you to get involved with our pre-school sessions, by bringing your own work,
                    hobbies, skills or interests to share with the children. You might, for example, be a member of the
                    Emergency Services, own chickens, have an active interests in crafts or keep exotic pets. If you
                    think you have skills, hobbies or interests that would be of interest to our children, please let us
                    know by getting in touch!
                </p>
                <p>
                    We are also always on the lookout for new committee members - take a look at our{" "}
                    <Link to="/vacancies">vacancies</Link> if you think you could help.
                </p>
            </Article>
        </Layout>
    );
};

export default PreSchoolPage;

export const Head = () => <PageHead pageTitle={heading} />;
