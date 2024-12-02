import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Settling in";

const SettlingInPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="New Pandas" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    When you choose for your child to start at Panda Preschool Playgroup, you will be invited to come in
                    for two settling-in visits. Each visit will last around an hour. There is no cost for attending
                    settling-in visits, and they should be arranged in advance.
                </p>
                <p>
                    All of our children are allocated a key worker, who is responsible for working closely with you to
                    help settle your child into Panda Preschool Playgroup. They also have a longer-term responsibility
                    to provide the best learning outcomes for your child, communicate your child&apos;s progress with
                    you and maintain a dedicated learning journal. This learning journal provides a record of your
                    child&apos;s interests and development, using photos, comments and artwork.
                </p>
            </Article>
        </Layout>
    );
};

export default SettlingInPage;

export const Head = () => <PageHead pageTitle={heading} />;
