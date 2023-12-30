import { FC } from "react";
import TermDates from "@/components/index/term-dates";
import Events from "@/components/index/events";
import News from "@/components/index/news";

const InformationCards: FC = () => {
    return (
        <div className="py-24 2xl:px-48 md:px-24 px-12 bg-emerald-700">
            <section className="rounded-lg w-full text-center p-12 bg-slate-100 mb-12">
                <News />
            </section>
            <div className="2xl:grid grid-cols-2 gap-24 justify-items-center">
                <section className="rounded-lg w-full text-center p-12 bg-slate-100 mb-12 2xl:mb-0">
                    <TermDates />
                </section>
                <section className="rounded-lg w-full text-center p-12 bg-slate-100 mb-12 2xl:mb-0">
                    <Events />
                </section>
            </div>
        </div>
    );
};

export default InformationCards;
