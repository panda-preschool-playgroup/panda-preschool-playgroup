import { FC } from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { formatDate } from "@/services/dates";

interface NewsProps {
    content: Queries.Maybe<Queries.ContentfulNews>;
}

const News: FC<NewsProps> = ({ content }: NewsProps) => {
    return (
        <div>
            <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-4xl">News</h2>
            <div className="text-left">
                {content?.lastUpdated && (
                    <p className="text-base mb-6">
                        <em>{formatDate(content?.lastUpdated)}</em>
                    </p>
                )}
                {content?.text && renderRichText(content?.text)}
            </div>
        </div>
    );
};

export default News;
