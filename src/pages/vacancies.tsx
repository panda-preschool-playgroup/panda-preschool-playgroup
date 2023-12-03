import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import { useFooterContent } from "@/queries/layout/footer/use-footer-content";

const heading = "Vacancies";

const VacanciesPage: FC = () => {
    const footerContent: Queries.ContentfulFooter = useFooterContent();

    return (
        <Layout showHomeLink pageHeading={heading}>
            <Article heading={heading}>
                <h3 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-3xl lg:text-4xl">
                    Committee member/Trustee
                </h3>
                <p>
                    We need people to represent and express the views of parents, bake, tend stalls, write for raffle
                    prizes or grants as well as people with financial, business, education or fundraising knowledge.
                </p>
                <p>
                    By being part of the committee you will help ensure that Ofsted regulations are met, equipment and
                    premises are safe and fit for purpose, our team of staff are properly recruited, employed and
                    supported, funding and payments are collected, paid and recorded.
                </p>
                <p>
                    In addition there are a variety of marketing, grant finding and fundraising roles so that we can buy
                    new equipment and resources for the children. Every parent/carer has something to offer - what could
                    you do?
                </p>
                <p>
                    If you would like to know more you can speak to the manager, who can put you in touch with someone
                    on the committee. Or just contact the committee directly at{" "}
                    <a href={`mailto:${footerContent.emailAddress}`}>{footerContent.emailAddress}</a>. We love to have
                    new members!
                </p>
                <p>Note that a committee role requires a mandatory DBS check, which we will support you with.</p>
            </Article>
        </Layout>
    );
};

export default VacanciesPage;

export const Head = () => <PageHead pageTitle={heading} />;
