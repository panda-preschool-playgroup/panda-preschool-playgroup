import { FC, PropsWithChildren } from "react";

interface SectionProps {
    style: "standard" | "alt";
    heading: string;
    image?: React.ReactElement;
}

const Section: FC<PropsWithChildren<SectionProps>> = (props: PropsWithChildren<SectionProps>) => {
    switch (props.style) {
        case "alt":
            return <AltSection {...props} />;
        case "standard":
        default:
            return <StandardSection {...props} />;
    }
};

const StandardSection: FC<PropsWithChildren<SectionProps>> = ({
    heading,
    image,
    children,
}: PropsWithChildren<SectionProps>) => {
    return (
        <div className="py-24 xl:px-48 md:px-24 px-12">
            <div className="xl:flex xl:gap-36">
                <div className="self-center">
                    <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-5xl lg:text-6xl">
                        {heading}
                    </h2>
                    {children}
                </div>
                {image && (
                    <div className="pt-8 shrink-0 flex justify-center self-center">
                        <div className="md:shrink-0">{image}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

const AltSection: FC<PropsWithChildren<SectionProps>> = ({
    heading,
    image,
    children,
}: PropsWithChildren<SectionProps>) => {
    return (
        <div className="py-24 xl:px-48 md:px-24 px-12 bg-emerald-700 text-slate-100 text-right">
            <div className="xl:flex xl:gap-36">
                <div className="self-center pb-8 xl:pb-0 xl:order-last">
                    <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-5xl lg:text-6xl">
                        {heading}
                    </h2>
                    {children}
                </div>
                {image && (
                    <div className="shrink-0 flex justify-center self-center">
                        <div className="md:shrink-0">{image}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Section;
