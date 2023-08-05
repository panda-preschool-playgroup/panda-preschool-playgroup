import { useSiteMetadata } from "@/queries/common/use-site-metadata";

interface SeoProps {
    pageTitle?: string;
}

const Seo = ({ pageTitle }: SeoProps) => {
    const siteMetadata = useSiteMetadata();

    return (
        <>
            <title>{pageTitle ? `${pageTitle} | ${siteMetadata.title}` : siteMetadata.title}</title>
            <meta name="description" content={siteMetadata.description ?? undefined} />
        </>
    );
};

export default Seo;
