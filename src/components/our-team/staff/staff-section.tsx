import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { FC, PropsWithChildren } from "react";

interface StaffSectionProps {
    style: "standard" | "alt";
    name: string;
    title: string;
    image?: Queries.Maybe<Queries.ContentfulAsset>;
}

const StaffSection: FC<PropsWithChildren<StaffSectionProps>> = ({
    style,
    name,
    title,
    image,
    children,
}: PropsWithChildren<StaffSectionProps>) => {
    return (
        <section
            className={`py-24 2xl:px-64 lg:px-48 md:px-24 px-12  ${
                style === "alt" ? " bg-emerald-700 text-slate-100 2xl:text-right" : ""
            }`}
        >
            <h3 className="font-dk-crayon-crumble mb-3 tracking-tight leading-none text-5xl lg:text-6xl">{name}</h3>
            <p className="text-2xl">
                <strong>{title}</strong>
            </p>
            <div className="2xl:flex 2xl:gap-36">
                <div className={`shrink-0 flex justify-center ${style === "standard" ? " 2xl:order-last" : ""}`}>
                    <div className="md:shrink-0 pb-8 2xl:pb-0">
                        {image?.gatsbyImageData ? (
                            <GatsbyImage
                                image={image.gatsbyImageData}
                                alt={image.title ?? ""}
                                aria-hidden
                                className="rounded"
                                style={{ width: 250, height: 250 }}
                            />
                        ) : (
                            <StaticImage
                                src="../../../images/logo.png"
                                alt={`Placeholder portrait for ${name}`}
                                aria-hidden
                                width={250}
                                height={250}
                            />
                        )}
                    </div>
                </div>
                <div className="self-center">{children}</div>
            </div>
        </section>
    );
};

export default StaffSection;
