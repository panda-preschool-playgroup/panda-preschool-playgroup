import { FC, PropsWithChildren } from "react";

interface SectionProps {
    heading: string;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({ heading, children }: PropsWithChildren<SectionProps>) => {
    return (
        <div className="py-24 px-[10%] border-t-8 border-green">
            <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-5xl lg:text-6xl">{heading}</h2>
            <div className="md:mr-[35%]">{children}</div>
        </div>
    );
};

export default Section;
