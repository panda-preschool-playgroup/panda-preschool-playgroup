import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import { Link } from "gatsby";

const heading = "Fees";

const FeesPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="New Pandas" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    The fee for your child attending Panda Playgroup is <strong>£5.50 per hour</strong>, or{" "}
                    <strong>£33.00</strong> for a full day including lunch club. Add an additional{" "}
                    <strong>£2.75</strong> per day if opting for an earlier <strong>8:30am</strong> start.
                </p>
                <p>We also ask for a small amount half-termly towards milk, snacks and other consumables.</p>
                <h3 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-3xl lg:text-4xl">
                    Payment
                </h3>
                <p>Invoices are issued on a half-termly basis, and we accept cash and cheques.</p>
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
