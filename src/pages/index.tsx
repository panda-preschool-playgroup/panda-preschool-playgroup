import { type FC } from "react";
import Seo from "@/components/seo";
import Navigation from "@/components/common/navigation/navigation";

const IndexPage: FC = () => {
    return (
        <main className="text-slate-700 font-quicksand">
            <Navigation />
        </main>
    );
};

export default IndexPage;

export const Head = () => <Seo />;
