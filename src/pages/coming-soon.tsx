import { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Coming soon...";

const ComingSoonPage: FC = () => {
    return (
        <Layout showHomeLink pageHeading={heading}>
            <div className="w-full">
                <Article heading={heading}>
                    <div className="w-full flex justify-center pb-8">
                        <StaticImage src="../images/logo.png" alt="" aria-hidden width={250} height={250} />
                    </div>
                </Article>
            </div>
        </Layout>
    );
};

export default ComingSoonPage;

export const Head = () => <PageHead pageTitle={heading} />;
