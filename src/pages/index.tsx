import { FC } from "react";
import Seo from "@/components/common/seo";
import Layout from "@/components/layout/layout";
import Jumbotron from "@/components/index/jumbotron";

const IndexPage: FC = () => {
    return (
        <Layout>
            <Jumbotron />
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo />;
