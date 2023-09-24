import { FC } from "react";
import { Table } from "flowbite-react";
import { useTermDates } from "@/queries/index/use-term-dates";

const TermDates: FC = () => {
    const termDates: Queries.ContentfulTermDates = useTermDates();

    return (
        <>
            <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-4xl">
                Term dates {termDates.academicYear}
            </h2>
            <Table>
                <Table.Body className="text-lg text-slate-800 divide-y">
                    {termDates.terms?.map((term: Queries.Maybe<Queries.ContentfulTermDatesTerms>) => (
                        <Term key={term?.sys?.id} term={term} />
                    ))}
                </Table.Body>
            </Table>
        </>
    );
};

interface TermProps {
    term: Queries.Maybe<Queries.ContentfulTermDatesTerms>;
}

const Term: FC<TermProps> = ({ term }: TermProps) => {
    return (
        <>
            <Table.Row>
                <Table.Cell rowSpan={2}>{term?.fields?.name?.en_US}</Table.Cell>
                <Table.Cell>{term?.fields?.firstHalf?.en_US}</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>{term?.fields?.secondHalf?.en_US}</Table.Cell>
            </Table.Row>
        </>
    );
};

export default TermDates;
