import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Charity model";

const CharityModelPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="Funding" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    Panda Preschool Playgroup is a nonprofit organisation and a registered charity. You can view our{" "}
                    <a href="https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5244482">
                        Charity Commission record
                    </a>{" "}
                    to see our complete Charitable Framework.
                </p>
                <p>Our primary sources of income are:</p>
                <ul>
                    <li>Session fees</li>
                    <li>Government funding</li>
                    <li>Workplace childcare voucher schemes</li>
                    <li>Grants and charitable donations</li>
                    <li>Fundraising</li>
                </ul>
                <p>This covers the day-to-day running costs such as:</p>
                <ul>
                    <li>Staff wages</li>
                    <li>Staff training</li>
                    <li>Venue hire</li>
                    <li>Insurance</li>
                    <li>Play and educational equipment</li>
                    <li>Administration costs</li>
                </ul>
                <p>
                    We try to keep our fees as low as possible and utilise fundraising as a way of meeting expenditure
                    for new equipment and resources. Fundraising also ensures that we have enough reserves to make sure
                    that we can still run effectively in years where the number of children is lower than our break
                    even.
                </p>
            </Article>
        </Layout>
    );
};

export default CharityModelPage;

export const Head = () => <PageHead pageTitle={heading} />;
