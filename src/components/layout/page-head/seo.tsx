import { useSiteMetadata } from "@/queries/layout/page-head/use-site-metadata";
import { FC } from "react";

interface SeoProps {
    pageTitle?: string;
}

const Seo: FC<SeoProps> = ({ pageTitle }: SeoProps) => {
    const siteMetadata = useSiteMetadata();

    return (
        <>
            <title>{pageTitle ? `${pageTitle} | ${siteMetadata.title}` : siteMetadata.title}</title>
            <meta name="description" content={siteMetadata.description ?? ""} />
        </>
    );
};

export default Seo;
