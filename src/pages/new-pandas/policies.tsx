import { FC, Fragment } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import { usePolicyGroups } from "@/queries/new-pandas/policies/use-policy-groups";

const heading = "Policies";

const PoliciesPage: FC = () => {
    const policyGroups: readonly Queries.ContentfulPolicyGroup[] = usePolicyGroups();

    return (
        <Layout showHomeLink activeSection="New Pandas" pageHeading={heading}>
            <Article heading={heading}>
                <p>You can download copies of all of our policy documents.</p>
                {policyGroups.map((policyGroup: Queries.ContentfulPolicyGroup) => (
                    <Fragment key={policyGroup.id}>
                        <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                            {policyGroup.title}
                        </h3>
                        <p>
                            <ul className="list-disc leading-loose ml-12 mt-4">
                                {policyGroup.policies?.map((policy: Queries.Maybe<Queries.ContentfulAsset>) => (
                                    <li key={policy?.id}>
                                        <a href={policy?.publicUrl} target="_blank" rel="noreferrer">
                                            {policy?.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </p>
                    </Fragment>
                ))}
            </Article>
        </Layout>
    );
};

export default PoliciesPage;

export const Head = () => <PageHead pageTitle={heading} />;
