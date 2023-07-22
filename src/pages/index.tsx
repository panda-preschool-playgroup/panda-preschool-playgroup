import { type FC } from "react";
import Seo from "@/components/seo";
import Navigation from "@/components/navbar";

const IndexPage: FC = () => {
    return (
        <main className="text-slate-700">
            <Navigation />
        </main>
    );
};

export default IndexPage;

export const Head = () => <Seo />;
