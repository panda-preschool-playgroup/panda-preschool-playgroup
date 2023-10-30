import { FC, PropsWithChildren } from "react";

interface ArticleProps {
    heading: string;
    image?: React.ReactElement;
}

const Article: FC<PropsWithChildren<ArticleProps>> = ({
    heading,
    image,
    children,
}: PropsWithChildren<ArticleProps>) => {
    return (
        <article className="pt-[4.5rem] pb-24 2xl:px-64 lg:px-48 md:px-24 px-12">
            <div className="2xl:flex 2xl:gap-36">
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
        </article>
    );
};

export default Article;
