import { type FC } from "react";
import Seo from "@/components/common/seo";
import Layout from "@/components/layout/layout";

const IndexPage: FC = () => {
    return <Layout />;
};

export default IndexPage;

export const Head = () => <Seo />;
