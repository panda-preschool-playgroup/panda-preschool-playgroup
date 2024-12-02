import { FC } from "react";
import { Table } from "flowbite-react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import ContentfulImage from "@/components/common/contentful-image";
import { useApplyImage } from "@/queries/use-apply-image";
import { useFooterContent } from "@/queries/layout/footer/use-footer-content";

const heading = "Apply";

const ApplyPage: FC = () => {
    const image = useApplyImage();

    const footerContent = useFooterContent();

    return (
        <Layout showHomeLink pageHeading={heading}>
            <Article heading={heading} image={<ContentfulImage imageTitle="Apply" images={[image]} />}>
                <p>Thank you for your interest in Panda Preschool Playgroup! </p>
                <p>
                    To enquire about a place for your child or to arrange a visit, please get in touch for a chat
                    through your preferred contact method:
                </p>

                <Table className="mb-12">
                    <Table.Body className="text-base sm:text-lg text-slate-800 divide-y">
                        <Table.Row>
                            <Table.Cell className="px-3">
                                <strong>
                                    <a href={`mailto:${footerContent.emailAddress}`}>{footerContent.emailAddress}</a>
                                </strong>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="px-3">
                                <strong>{footerContent.phoneNumber}</strong>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <p>We look forward to hearing from you!</p>
            </Article>
        </Layout>
    );
};

export default ApplyPage;

export const Head = () => <PageHead pageTitle={heading} />;
