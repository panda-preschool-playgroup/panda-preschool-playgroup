import { FC } from "react";
import TermDates from "@/components/index/term-dates";

const InformationCards: FC = () => {
    return (
        <div className="py-24 xl:px-48 md:px-24 px-12 xl:grid grid-cols-2 gap-24 justify-items-center bg-emerald-700">
            <div className="rounded-lg w-full text-center p-12 bg-slate-100">
                <TermDates />
            </div>
        </div>
    );
};

export default InformationCards;
