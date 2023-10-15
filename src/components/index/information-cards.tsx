import { FC } from "react";
import TermDates from "@/components/index/term-dates";
import Events from "@/components/index/events";

const InformationCards: FC = () => {
    return (
        <div className="py-24 2xl:px-48 md:px-24 px-12 2xl:grid grid-cols-2 gap-24 justify-items-center bg-emerald-700">
            <section className="rounded-lg w-full text-center p-12 bg-slate-100 mb-12 2xl:mb-0">
                <TermDates />
            </section>
            <section className="rounded-lg w-full text-center p-12 bg-slate-100 mb-12 2xl:mb-0">
                <Events />
            </section>
        </div>
    );
};

export default InformationCards;
