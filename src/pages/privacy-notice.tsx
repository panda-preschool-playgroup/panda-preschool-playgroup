import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import { usePrivacyNotices } from "@/queries/privacy-notice/use-privacy-notices";

const heading = "Privacy Notice";

const PrivacyNoticePage: FC = () => {
    const privacyNotices = usePrivacyNotices();

    console.log(privacyNotices.length);

    return (
        <Layout showHomeLink pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    Our Privacy Notices explain our practices, including your choices, regarding the collection, use and
                    disclosure of certain information, including your personal information, by Panda Preschool Playgroup
                    and Sticky Mitts and Tiny Tots.
                </p>
                <ul>
                    {privacyNotices.map((privacyNotice: Queries.ContentfulAsset) => (
                        <li key={privacyNotice.id}>
                            <a href={privacyNotice.url ?? "#"} target="_blank" rel="noreferrer">
                                {privacyNotice.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </Article>
        </Layout>
    );
};

export default PrivacyNoticePage;

export const Head = () => <PageHead pageTitle={heading} />;
