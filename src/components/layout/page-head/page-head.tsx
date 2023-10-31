import { FC } from "react";
import Fonts from "@/components/layout/page-head/fonts";
import Seo from "@/components/layout/page-head/seo";

interface PageHeadProps {
    pageTitle?: string;
}

const PageHead: FC<PageHeadProps> = ({ pageTitle }: PageHeadProps) => {
    return (
        <>
            <Seo pageTitle={pageTitle} />
            <Fonts />
        </>
    );
};

export default PageHead;
