import { FC } from "react";
import { Link } from "gatsby";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const StickyMittsTinyTotsPage: FC = () => {
    const heading = "Sticky Mitts and Tiny Tots";

    return (
        <Layout activeSection="Sessions" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    Sticky Mitts and Tiny Tots is a friendly, fun group for children and their grown-ups on a Monday and
                    Wednesday morning from <strong>09:45am to 11:15am</strong> during term time. Sessions take place in
                    the Methodist Hall just round the corner from the pre-school - see our{" "}
                    <Link to="/">contact details</Link> for more information about how to find us.
                </p>
                <p>
                    Babies and toddlers from 0-4+ Years are welcomed - we offer playing, crafting, getting messy, a
                    healthy snack and, of course, singing! We also have baby weighing scales.
                </p>
                <p>
                    The sessions are £3.00 for one adult and one child or £4.00 for an adult and more than one child. We
                    ask for registration, booking and prepayment for half a term in advance.
                </p>
            </Article>
        </Layout>
    );
};

export default StickyMittsTinyTotsPage;

export const Head = () => <PageHead />;
