import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Aims";

const AimsPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="Our approach" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    We provide termtime-only, committee-run{" "}
                    <a href="https://reports.ofsted.gov.uk/provider/16/2810800">Ofsted</a> registered provision for
                    children from 18 months. The manager is an Early Years teacher with more than 20 years&apos;
                    experience in childcare. She is supported by a caring team of well qualified Early Years
                    Practitioners and together they ensure all children thrive and learn in a safe stimulating and
                    nurturing environment.
                </p>
                <p>
                    Our groups are small so that learning experiences can be tailored to each child&apos;s interests and
                    unique developmental stage. The team recognise the crucial role of parental support and knowledge of
                    their child.
                </p>
                <p>
                    We provide an inclusive setting with a member of staff, who is an accredited Special Educational
                    Needs Co-ordinator. The SENCO works closely with the family, keyworker, and outside agencies to
                    enhance the child&apos;s play and experiences whilst in the preschool. Staff are well trained in
                    paediatric first aid, language development, (including Makaton) use of epipen and peg feeding and
                    have experience of autism as well as physical and/or learning difficulties. We can offer 1-1 care if
                    this is needed. The hall is wheelchair accessible. We also have a quiet room for sleep and/or
                    sensory play.
                </p>
                <p>
                    Our focus is to ensure that every child that comes to Pandas, is offered equal opportunities to be
                    able to grow within our setting as individuals. We aim to offer a welcoming and relaxed environment,
                    that is safe and secure to help support the children to explore and discover our enriched play space
                    as they grow, develop, and learn, both indoor and outdoor, that is both stimulating and encourages
                    independence.
                </p>
            </Article>
        </Layout>
    );
};

export default AimsPage;

export const Head = () => <PageHead pageTitle={heading} />;
