import { FC } from "react";
import TermDates from "@/components/index/term-dates";

const InformationCards: FC = () => {
    return (
        <div className="py-24 xl:px-48 md:px-24 px-12 xl:grid grid-cols-2 gap-24 justify-items-center bg-emerald-700">
            <div className="rounded-lg w-full text-center p-12 bg-slate-100 mb-12 xl:mb-0">
                <TermDates />
            </div>
            <div className="rounded-lg w-full text-center p-12 bg-slate-100">
                <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-4xl">Upcoming events</h2>
            </div>
        </div>
    );
};

export default InformationCards;
