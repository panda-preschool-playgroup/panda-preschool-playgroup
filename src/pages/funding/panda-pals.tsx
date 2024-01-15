import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import { usePandaPals } from "@/queries/funding/panda-pals/use-panda-pals";

const heading = "Panda Pals";

const PandaPalsPage: FC = () => {
    const pandaPals = usePandaPals();

    return (
        <Layout showHomeLink activeSection="Funding" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    Every Christmas we holds a raffle with a view to raising funds. We wouldn&apos;t be able to do this
                    without the support of the local businesses listed below (who donate prizes) and the community (who
                    purchase the tickets).
                </p>
                <p>
                    So, (imagine these words shouted by children) - <strong>THANK YOU!!</strong>
                </p>
                <ul className="list-none">
                    {pandaPals.links?.map((link: Queries.Maybe<Queries.ContentfulLink>) => (
                        <li key={link?.id}>
                            <span aria-hidden="true">🐼</span>{" "}
                            <a href={link?.url ?? ""} target="_blank" rel="noreferrer">
                                {link?.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </Article>
        </Layout>
    );
};

export default PandaPalsPage;

export const Head = () => <PageHead pageTitle={heading} />;
