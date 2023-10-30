import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Section from "@/components/index/section";
import { Link } from "gatsby";

const PreSchoolPage: FC = () => {
    const heading = "Our pre-school";

    return (
        <Layout activeSection="Sessions" pageHeading={heading}>
            <Section style="standard" heading={heading}>
                <p>
                    Our morning sessions run Monday to Friday, <strong>09:00am to 12:00pm</strong>. We then have lunch
                    club from <strong>12:00pm to 12:30pm</strong>, and the afternoon session runs from{" "}
                    <strong>12:30pm to 3:00pm</strong>. We also offer an earlier <strong>08:30am</strong> start for
                    those who would prefer.
                </p>
                <p>
                    From the age of two, children are eligible to join Panda Playgroup. The pre-school is registered
                    with <a href="https://reports.ofsted.gov.uk/provider/16/EY501461">OFSTED</a> and is a member of the
                    Pre-school Learning Alliance.
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
                    commitments please consult the <Link to="/approach/green-panda">Green Panda</Link>.
                </p>
            </Section>
        </Layout>
    );
};

export default PreSchoolPage;

export const Head = () => <PageHead />;
