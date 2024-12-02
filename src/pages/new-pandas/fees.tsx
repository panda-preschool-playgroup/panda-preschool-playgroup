import { FC } from "react";
import { Link } from "gatsby";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Our fees";

const FeesPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="New Pandas" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    The charge for Pandas is currently <strong>£6.00 per hour</strong> plus a “Pandas Consumables
                    Charge”.
                </p>

                <p>
                    We are happy to accept Private Funding, Government Funding, or a mixture of Private and Government
                    Funding for the hours that your child attends Panda Preschool Playgroup. Please note that in
                    addition to the hourly charge (covered by Private/Government Funding), a “Pandas Consumable Charge”
                    is also payable.
                </p>

                <p>
                    We advertise our fee as a flat hourly rate so that you can calculate your own fees based on the
                    hours you choose. So if you opt for an early start, or if you choose to pick your child up a little
                    earlier, you can calculate the fees you&apos;ll pay based on the hourly rate. Our policy is{" "}
                    <strong>you only pay for the hours you need</strong>.
                </p>

                <h3 className="font-dk-crayon-crumble my-12 tracking-tight leading-none text-3xl lg:text-4xl">
                    Pandas Consumable Charge
                </h3>
                <p>
                    There is an additional charge of <strong>£6.00 per day of the week per half term</strong> to cover
                    the cost of snacks and consumables that Panda Preschool Playgroup provides. (For example, if you
                    child attends three days a week, then an additional £6.00 x 3 ={" "}
                    <strong>£18.00 per half term</strong> is payable directly to Panda Preschool Playgroup).
                </p>
                <p>
                    Please don&apos;t hesitate to <Link to="/contact">get in touch with us</Link> for any other
                    questions you have about fees and funding.
                </p>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Help towards childcare costs
                </h3>
                <p>
                    Many families are eligible for help towards their childcare costs. For more information, visit{" "}
                    <a href="https://www.childcarechoices.gov.uk">Childcare Choices</a>. Please also see the summary
                    below.
                </p>
                <ul>
                    <li>Tax-free childcare.</li>
                    <li>All 3 and 4-year-olds are entitled to 15 hours funding per week over 38 weeks of the year.</li>
                    <li>
                        Some 3 and 4-year-olds are entitled to an additional 15 hours funding per week (30 Hours
                        Extended Funding Entitlement) over 38 weeks of the year.
                    </li>
                    <li>Some 2-year-olds are entitled to 15 hours funding per week over 38 weeks of the year.</li>
                    <li>
                        Some 9 to 23-month-olds will be eligible for up to 15 hours funding per week from September
                        2024.
                    </li>
                </ul>
            </Article>
        </Layout>
    );
};

export default FeesPage;

export const Head = () => <PageHead pageTitle={heading} />;
