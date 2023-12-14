import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Mission statement";

const MissionStatementPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="Our approach" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    We are a registered charity, run by a volunteer committee and staffed by a strong and dedicated team
                    of childcare professionals. We are all passionate about what we do and constantly work to improve an
                    Early Years setting that is unique to Copmanthorpe village.
                </p>
                <p>Our mission statement reflects this passion:</p>
                <p className="text-xl">
                    <blockquote className="px-12 sm:px-18 md:px-24 xl:px-48">
                        <strong>
                            &ldquo;To provide the youngest people in our community with a safe, high quality and
                            inspirational Early Years setting to help prepare them for their journey into education and
                            beyond&rdquo;
                        </strong>
                    </blockquote>
                </p>
                <p>
                    Our mission statement is underpinned by a number of distinct aims. These aims are to commit to
                    making Panda Playgroup a place where children are:
                </p>
                <p>
                    <ul className="list-disc leading-loose ml-12 mt-4">
                        <li>Encouraged to develop a positive sense of themselves and their abilities.</li>
                        <li>Encouraged to build close and lasting relationships.</li>
                        <li>
                            Encouraged to freely engage in different experiences enthusiastically, messily and
                            spontaneously.
                        </li>
                        <li>
                            Encouraged to explore outdoors and indoors environments and gain the confidence to solve
                            their own problems, set their own challenges and manage their own risks.
                        </li>
                        <li>Helped to feel secure through the development of safe boundaries.</li>
                        <li>Supported as unique learners to develop their full potential.</li>
                    </ul>
                </p>
                <p>
                    And where parents are valued and encouraged to take an active part in their children&apos;s learning
                    and in the running of the Playgroup.
                </p>
                <p>
                    Above all, Panda Playgroup is a place that we all create together and where your children are at the
                    centre of all activities and are supported and encouraged to make their own choices.
                </p>
            </Article>
        </Layout>
    );
};

export default MissionStatementPage;

export const Head = () => <PageHead pageTitle={heading} />;
