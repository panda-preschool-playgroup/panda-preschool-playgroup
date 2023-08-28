import { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import LinkButton from "@/components/common/link-button";
import { useJumbotronImageAsset } from "@/queries/index/use-jumbotron-image-asset";

const Jumbotron: FC = () => {
    const jumbotronImageAsset: Queries.ContentfulAsset = useJumbotronImageAsset();

    return (
        <section className="grid">
            {jumbotronImageAsset.gatsbyImageData && (
                <GatsbyImage
                    image={jumbotronImageAsset.gatsbyImageData}
                    alt=""
                    aria-hidden
                    className="grid-area-1-1 opacity-80 brightness-80"
                />
            )}
            <div className="grid-area-1-1 text-center relative place-items-center mx-auto px-4 py-24 lg:py-40">
                <p className="font-darumadrop-one mb-4 py-4 md:py-8 tracking-tight leading-none text-slate-100 text-5xl md:text-7xl lg:text-8xl text-shadow">
                    A safe, welcoming and fun environment
                </p>
                <p className="font-black text-slate-100 text-xl text-shadow md:text-2xl lg:text-4xl mb-8 py-4 md:py-8 sm:px-16 lg:px-48">
                    Situated in the heart of Copmanthorpe village in York, we aim to provide children with an exciting
                    journey of learning through play
                </p>
                <LinkButton text="Watch our virtual tour" href="#" />
            </div>
        </section>
    );
};

export default Jumbotron;
