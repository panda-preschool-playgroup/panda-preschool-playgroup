import { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "@/components/common/link-button";

const Jumbotron: FC = () => {
    return (
        <section className="grid">
            <StaticImage
                src={"../../images/howell-hall.jpg"}
                layout="fullWidth"
                placeholder="blurred"
                aspectRatio={3 / 1}
                alt=""
                aria-hidden
                className="grid-area-1-1 opacity-80 brightness-60"
            />
            <div className="grid-area-1-1 text-center relative place-items-center mx-auto px-4 py-24 lg:py-40">
                <h1 className="font-kg-second-chances mb-4 py-4 md:py-8 tracking-tight leading-none text-slate-100 text-4xl md:text-6xl lg:text-7xl text-shadow">
                    A safe, welcoming and fun environment
                </h1>
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
