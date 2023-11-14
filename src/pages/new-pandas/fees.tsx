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
                    The fee for your child to attend pre-school is <strong>£5.50 per hour</strong>:
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

                <p>We also ask for a small amount half-termly towards milk, snacks and other consumables.</p>

                <h3 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-3xl lg:text-4xl">
                    Payment
                </h3>
                <p>
                    Fees are payable on a half-termly basis (including sickness/non-attendance), and we accept cash and
                    cheques.
                </p>
                <p>
                    We accept childcare vouchers from:
                    <ul className="list-disc ml-12 mt-4">
                        <li>Computershare Voucher Services</li>
                        <li>Edenred Childcare Vouchers</li>
                        <li>KiddiVouchers</li>
                        <li>Fideliti</li>
                    </ul>
                </p>
                <p>
                    Nursery Education Funding is also available from the term following a child&apos;s third birthday,
                    or second birthday in some cases. Please visit{" "}
                    <a href="https://www.raiseyork.co.uk/childcare/childcare-2">Raise York</a> for further details.
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
