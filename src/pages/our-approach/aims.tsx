import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Aims";

const AimsPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="Our approach" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    We are a registered charity supported by a group of committee members. We are committed to
                    safeguarding and promoting the welfare of our children and expect all staff, volunteers, and
                    visitors to share this commitment.
                </p>
                <p>
                    We provide an inclusive setting with a member of staff, who is an accredited Special Educational
                    Needs Co-ordinator. She works closely with the children, parents, and outside agencies to enhance
                    the child&apos;s play and experiences whilst in the preschool. We can offer 1-1 care if this is
                    needed. The hall is wheelchair accessible.
                </p>
                <p>
                    Our focus is to ensure that every child that comes to Pandas, is offered equal opportunities to be
                    able to grow within our setting as individuals. We aim to offer a welcoming and relaxed environment,
                    that is safe and secure to help support the children to explore and discover our enriched play space
                    as they grow, develop, and learn, both indoor and outdoor, that is both stimulating and encourages
                    independence.
                </p>
            </Article>
        </Layout>
    );
};

export default AimsPage;

export const Head = () => <PageHead pageTitle={heading} />;
