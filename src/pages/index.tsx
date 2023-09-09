import { FC } from "react";
import { Link } from "gatsby";
import PageHead from "@/components/layout/page-head/page-head";
import Layout from "@/components/layout/layout";
import ContentfulImage from "@/components/common/contentful-image";
import Jumbotron from "@/components/index/jumbotron";
import Section from "@/components/index/section";
import { useGetHomepageImages } from "@/queries/index/use-get-homepage-images";

const IndexPage: FC = () => {
    const images: Queries.ContentfulAsset[] = useGetHomepageImages();

    return (
        <Layout>
            <Jumbotron />
            <Section
                style="standard"
                heading="Our pre-school for little Pandas"
                image={<ContentfulImage imageTitle="Homepage - Pre-school" images={images} />}
            >
                <p>Panda Playgroup is a safe and welcoming pre-school setting for 2-4+ years.</p>
                <p>
                    Our aim is to provide your child with the best support and care as they take their first steps
                    towards starting school. Our sessions provide local pre-school children with an exciting journey of
                    learning through play.
                </p>
                <p>
                    We have been serving the Copmanthorpe community for more than forty years. Generations of little
                    Pandas have started their life journey in our caring and capable hands!
                </p>
                <p className="mt-8 text-2xl">
                    <strong>
                        <Link to="/">Find out more about our pre-school</Link>
                    </strong>
                </p>
            </Section>
            <Section
                style="alt"
                heading="Drop-in sessions, Sticky Mitts & Tiny Tots"
                image={<ContentfulImage imageTitle="Homepage - Sticky Mitts & Tiny Tots" images={images} />}
            >
                <p>
                    As well as our pre-school we offer our extremely popular drop-in sessions for babies and toddlers,{" "}
                    <strong>Sticky Mitts and Tiny Tots</strong>! This is a friendly, fun group for children and their
                    grown-ups happening regularly during term time.
                </p>
                <p>
                    We aim to help parents find somewhere safe and welcoming to come and have fun with their children,
                    meet other parents and get a taste of what Panda Playgroup has to offer.
                </p>
                <p className="text-2xl">
                    <strong>
                        <Link to="/">Discover our drop-in sessions</Link>
                    </strong>
                </p>
            </Section>
            <Section style="standard" heading="A charity-run early years setting">
                <p>
                    We are a registered charity, run by a volunteer committee and staffed by a strong and dedicated team
                    of childcare professionals. We are all passionate about what we do and constantly work to improve an
                    early years setting that is unique to Copmanthorpe village.
                </p>
                <p>
                    Find out more about how you can <Link to="/">support our fundraising</Link>, or{" "}
                    <Link to="/">see the list of &quot;Panda Pals&quot;</Link> who very kindly support our cause!
                </p>
            </Section>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <PageHead />;
