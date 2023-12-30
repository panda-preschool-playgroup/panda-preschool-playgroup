import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import { useStickyMittsTinyTotsImage } from "@/queries/sessions/stay-and-play/use-sticky-mitts-tiny-tots-image";
import ContentfulImage from "@/components/common/contentful-image";

const heading = "Stay and Play";

const StickyMittsTinyTotsPage: FC = () => {
    const image = useStickyMittsTinyTotsImage();

    return (
        <Layout showHomeLink activeSection="Sessions" pageHeading={heading}>
            <Article
                heading={`${heading} - Sticky Mitts and Tiny Tots`}
                image={<ContentfulImage imageTitle="Sticky Mitts" images={[image]} />}
            >
                <p>
                    Sticky Mitts and Tiny Tots is a friendly, fun group for children and their grown-ups on a Monday and
                    Wednesday morning from <strong>9:45am to 11:15am</strong> during term time. Sessions take place in
                    the Methodist Hall just round the corner from the preschool.
                </p>
                <p>
                    Babies and toddlers from 0-4+ Years are welcomed - we offer playing, crafting, getting messy, a
                    healthy snack and, of course, singing! We also have baby weighing scales.
                </p>
                <p>
                    The sessions are <strong>£3.00</strong> for one adult and one child if paid half-termly in advance,
                    or <strong>£4.00</strong> when dropping in. Additional siblings are an extra <strong>£1.00</strong>{" "}
                    each per session.
                </p>
            </Article>
        </Layout>
    );
};

export default StickyMittsTinyTotsPage;

export const Head = () => <PageHead pageTitle={heading} />;
