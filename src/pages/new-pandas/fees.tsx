import { FC } from "react";
import { Link } from "gatsby";
import { Table } from "flowbite-react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Fees";

const FeesPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="New Pandas" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    We are happy to accept Private Funding, Government Funding, or a mixture of Private and Government
                    Funding for the hours that your child attends Panda Playgroup. Please note that in addition to the
                    hourly charge (covered by Private /Government Funding), a “Pandas Consumable Charge” is also
                    payable.
                </p>
                <p>
                    The charge for Pandas is <strong>£5.50 per hour</strong> plus a “Pandas Consumables Charge”:
                </p>

                <div className="max-w-4xl">
                    <Table className="mb-12">
                        <Table.Head>
                            <Table.HeadCell className="bg-gray-200">Session</Table.HeadCell>
                            <Table.HeadCell className="bg-gray-200">Cost</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="text-lg text-slate-800 divide-y">
                            <Table.Row>
                                <Table.Cell>Morning (3 hours)</Table.Cell>
                                <Table.Cell>
                                    <strong>£16.50</strong>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Full day (6 hours)</Table.Cell>
                                <Table.Cell>
                                    <strong>£33.00</strong>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Payment
                </h3>
                <p>Government Funding replaces the hourly charge. The “Pandas Consumables Charge” is still payable.</p>
                <p>
                    <ul className="list-disc leading-loose ml-12 mt-4">
                        <li>
                            All 3 and 4-year-olds are entitled to 15 hours funding per week over 38 weeks of the year.
                        </li>
                        <li>
                            Some 3 and 4-year-olds are entitled to an additional 15 hours funding per week (30 Hours
                            Extended Funding Entitlement) over 38 weeks of the year.
                        </li>
                        <li>Some 2-year-olds are entitled to 15 hours funding per week over 38 weeks of the year.</li>
                    </ul>
                </p>
                <p>
                    To check eligibility and how to apply for 30 hours extended funding for 3- and 4-year-olds and 15
                    hours funding for 2-year-olds please refer to{" "}
                    <a href="https://www.childcarechoices.gov.uk">Childcare Choices</a>.
                </p>

                <h3 className="font-dk-crayon-crumble my-12 tracking-tight leading-none text-3xl lg:text-4xl">
                    Pandas Consumable Charge
                </h3>
                <p>
                    There is an additional charge of <strong>£6.00 per day of the week per half term</strong> to cover
                    the cost of snacks and consumables that Panda Playgroup provides. (For example, if you child attends
                    three days a week, then an additional £6.00 x 3 = <strong>£18.00 per half term</strong> is payable
                    directly to Panda Playgroup).
                </p>
                <p>
                    Please don&apos;t hesitate to <Link to="/contact">get in touch with us</Link> for any other
                    questions you have about fees and funding.
                </p>
            </Article>
        </Layout>
    );
};

export default FeesPage;

export const Head = () => <PageHead pageTitle={heading} />;
