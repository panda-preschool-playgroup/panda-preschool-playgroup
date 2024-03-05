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
                    <strong>pick up your child earlier as well</strong>. Our session times link with school and have
                    been found to be ideal for parents working from home or just part time as we invoice only for the
                    hours needed.
                </p>
                <p>
                    We have vacancies on most days of the week but advise early registration. We charge only for the
                    hours you need. Please refer to <Link to="/new-pandas/fees">our fees</Link> for more information.
                </p>
                <p>
                    Ad hoc days are also available whilst we have spaces should your usual childcare be disrupted or if
                    you need to work an extra day.
                </p>
                <p>
                    Our aim is to provide your child with the best support and care as they take their first steps
                    towards starting school. Children are encouraged to pursue their own interests through free play as
                    well as join in group activities such a snack, story and song time.
                </p>
                <p>
                    Please see <Link to="/our-approach/aims">our aims</Link> to find out more about how our sessions are
                    run.
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
