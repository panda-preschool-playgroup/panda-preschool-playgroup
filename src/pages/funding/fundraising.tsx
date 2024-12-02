import { FC } from "react";
import { Link } from "gatsby";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import { useFundraisingImages } from "@/queries/funding/fundraising/use-fundraising-images";
import ContentfulImage from "@/components/common/contentful-image";

const heading = "Fundraising";

const FundraisingPage: FC = () => {
    const images = useFundraisingImages();

    const pandaImage = <ContentfulImage imageTitle="Fundraising - Panda" images={images} />;

    const easyFundraisingLogo = images.find(
        (image: Queries.ContentfulAsset) => image.title === "Fundraising - Easy Fundraising Logo",
    );

    return (
        <Layout showHomeLink activeSection="Funding" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    Fundraising is extremely important in ensuring that Pandas continues to be an important asset to our
                    village community. We are always on the lookout for volunteers so please speak to one of the
                    Committee or <Link to="/vacancies">check our vacancies</Link> if you are interested in helping out.
                </p>
                <p>
                    We are also on the lookout for grants that we might apply for at any time. So, if you have any good
                    ideas do let someone from the Committee know. We have had some fabulous support from the companies
                    that Panda parents work for - an inside contact works wonders!
                </p>
                <p>As well as that we have...</p>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Easy Fundraising
                </h3>
                {easyFundraisingLogo && (
                    <div className="shrink-0 flex">
                        <svg height="100">
                            <image xlinkHref={easyFundraisingLogo.url ?? ""} width="100%" />
                        </svg>
                    </div>
                )}
                <p>
                    If you shop online, use <a href="https://www.easyfundraising.org.uk/">Easy Fundraising</a>, where
                    you can access over 2700 online retailers.
                </p>
                <p>
                    {" "}
                    Panda Preschool Playgroup gets a percentage of the retail price for whatever you buy, so instead of
                    going directly to a retailer&#39;s website, check if they are on Easy Fundraising first. It&#39;s
                    free to use and your shopping won&#39;t cost you a penny more.
                </p>
                <p>Easy Fundraising has raised over £1500 for Panda Preschool Playgroup to date!</p>
                <p>
                    <a href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=121929">
                        Just click here to sign up and support our cause!
                    </a>
                </p>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Febfest
                </h3>
                <p>
                    Our first fundraising event of the year is Febfest. Christmas is over and winter has set in, so it
                    is time for an event! On a boring Saturday in February, we celebrate Febfest: games for the
                    children, tea, coffee, juice, and cakes at Howell Hall.
                </p>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Bag2School
                </h3>
                <p>
                    Throughout the year we collect lots of the things you don&apos;t want to raise money for Pandas.
                    Bag2School collects the bags of clothing etc. at regular intervals - just keep an eye out for the
                    notices and have a clear-out.
                </p>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Copmanthorpe Carnival
                </h3>
                <p>
                    We have a stall every July at the hugely popular Copmanthorpe Carnival. This is when we have our BIG
                    tombola (n.b. we collect prizes for it throughout the year!).
                </p>
                <p>
                    As well as the tombola, we have prize-every-time games for the children and a raffle for grown-ups.
                    The children also get on stage to open the carnival along with children from the other early years
                    providers in the village.
                </p>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Sponsored Event
                </h3>
                <p>
                    Each year we run a sponsored event, which gives all the Panda children the opportunity to show what
                    they can do! They have a list of tasks - lie down and look at the sky, stamp through a puddle, find
                    an oak leaf...
                </p>
                <p>
                    Once they have ticked off the tasks, they can claim the funds from their sponsors and support
                    Pandas.
                </p>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Whitebox Photography
                </h3>
                <p>
                    Whitebox bring their professional family photography event to Pandas every November. Competitively
                    priced, this is a very popular event with families in the village.
                </p>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Grand Christmas Raffle
                </h3>
                <p>
                    The fundraising highlight of the year is our annual Christmas Raffle. The draw is held shortly
                    before Christmas Day - around 22nd December. The prizes are WONDERFUL, and there are lots of them.
                    They are sold by our Panda parents and friends and of course the Committee members who are regularly
                    seen in December outside the Cop Shops; sometimes Panda is there too - to help out.
                </p>
                {pandaImage && (
                    <div className="pt-8 shrink-0 flex justify-center self-center pb-12 2xl:pb-0">
                        <div className="md:shrink-0">{pandaImage}</div>
                    </div>
                )}
            </Article>
        </Layout>
    );
};

export default FundraisingPage;

export const Head = () => <PageHead pageTitle={heading} />;
