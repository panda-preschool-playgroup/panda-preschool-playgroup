import { FC } from "react";
import { Link } from "gatsby";
import PageHead from "@/components/layout/head/head";
import Layout from "@/components/layout/layout";
import Jumbotron from "@/components/index/jumbotron";
import { useGetHomepageImages } from "@/queries/index/use-get-homepage-images";
import ContentfulImage from "@/components/common/contentful-image";

const IndexPage: FC = () => {
    const images: Queries.ContentfulAsset[] = useGetHomepageImages();

    return (
        <Layout>
            <Jumbotron />

            <div className="py-24 px-[10%]">
                <div className="flex gap-36">
                    <div className="self-center">
                        <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-5xl lg:text-6xl">
                            Our pre-school for little Pandas
                        </h2>
                        <p>Panda Playgroup is a safe and welcoming pre-school setting for 2-4+ years.</p>
                        <br></br>
                        <p>
                            Our aim is to provide your child with the best support and care as they take their first
                            steps towards starting school. Our sessions provide local pre-school children with an
                            exciting journey of learning through play.
                        </p>
                        <br></br>
                        <p>
                            We have been serving the Copmanthorpe community for more than forty years. Generations of
                            little Pandas have started their life journey in our caring and capable hands!
                        </p>
                        <br></br>
                        <br></br>
                        <p className="text-2xl">
                            <strong>
                                <Link to="/">Find out more about our pre-school</Link>
                            </strong>
                        </p>
                    </div>
                    <div className="shrink-0">
                        <ContentfulImage imageTitle="Homepage - Pre-school" images={images} />
                    </div>
                </div>
            </div>

            <div className="md:pl-[35%] py-24 px-[10%] bg-emerald-700 text-slate-100 text-right">
                <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-5xl lg:text-6xl">
                    Drop-in sessions, Sticky Mitts & Tiny Tots
                </h2>
                <p>
                    As well as our pre-school we offer our extremely popular drop-in sessions for babies and toddlers,
                    <br></br>
                    <strong>Sticky Mitts and Tiny Tots</strong>! This is a friendly, fun group for children and their
                    grown-ups happening regularly during term time.
                </p>
                <br></br>
                <p>
                    We aim to help parents find somewhere safe and welcoming to come and have fun with their children,
                    meet other parents and get a taste of what Panda Playgroup has to offer.
                </p>
                <br></br>
                <br></br>
                <p className="text-2xl">
                    <strong>
                        <Link to="/">Discover our drop-in sessions</Link>
                    </strong>
                </p>
            </div>
            <div className="py-24 px-[10%] md:w-[75%]">
                <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-5xl lg:text-6xl">
                    A charity-run early years setting
                </h2>
                <p>
                    We are a registered charity, run by a volunteer committee and staffed by a strong and dedicated team
                    of childcare professionals. We are all passionate about what we do and constantly work to improve an
                    early years setting that is unique to Copmanthorpe village.
                </p>
                <br></br>
                <p>
                    Find out more about how you can <Link to="/">support our fundraising</Link>, or{" "}
                    <Link to="/">see the list of &quot;Panda Pals&quot;</Link> who very kindly support our cause!
                </p>
            </div>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <PageHead />;
