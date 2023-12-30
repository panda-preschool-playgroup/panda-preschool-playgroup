import { formatDate } from "@/services/dates";
import { FC } from "react";

const News: FC = () => {
    return (
        <div>
            <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-4xl">News</h2>
            <div className="text-left">
                <p className="text-base text-slate-500 mb-6">{formatDate("01-01-2024")}</p>
                <p>
                    <strong>STOP PRESS!</strong> We are reviewing and our services and have some exciting proposals for
                    2024. The preschool is preparing to:
                </p>
                <ul className="list-disc leading-loose ml-12 mt-4 mb-10">
                    <li>Welcome children from 18 months from February Half Term</li>
                    <li>Offer ad hoc places to parents where normal childcare is disrupted for a few days</li>
                    <li>Possibly extend sessions till 3:30pm</li>
                </ul>
                <p>
                    If you think any of these services might be helpful to you please get in touch for further
                    information. Please also contact us if you have other suggestions.
                </p>
            </div>
        </div>
    );
};

export default News;
