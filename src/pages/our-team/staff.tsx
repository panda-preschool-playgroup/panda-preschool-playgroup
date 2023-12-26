import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import StaffSection from "@/components/our-team/staff/staff-section";

const heading = "Staff";

const StaffPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="Our team" pageHeading={heading}>
            <Article heading={heading}>
                <p className="pb-12">
                    Panda Playgroup has an exemplary team of qualified, dedicated staff, all of whom have received
                    training in First Aid, Food Hygiene and Safeguarding Children, which they update every three years.
                    In addition, they carry out annual training to meet statutory requirements for delivering the Early
                    Years Foundation Stage to a high standard. Our caring and dedicated staff are always approachable if
                    you need a chat.
                </p>
            </Article>
            <StaffSection style="alt" name="Lynne Selby" title="Preschool Manager and SENCO">
                <p>
                    I achieved Early Years Teacher Status in July 2015. This followed a BA (Hons) in Educational
                    Leadership- Children&apos;s Workforce in 2014.
                </p>
                <p>
                    I became Panda Playgroup Leader in January 2017. I started my career in childcare in 2000. First as
                    a childminder, Moving onto Preschools as my children moved on to school. I have done various courses
                    in childcare including Cache Level 3 in childminding practice, NVQ in Children&apos;s care,
                    Foundation Degree completed in 2013 followed by BA and EYTS. I have done a wide range of courses in
                    special needs including Speech and Language, Autism, Disability Awareness, Portage, Sensory
                    Impairment, children&apos;s mental health and Forest Schools. I enjoy helping the children learn new
                    things and love to celebrate their achievements. I am dedicated to give the children in my care the
                    best possible outcome. I continue my own professional development to keep up to date with the latest
                    learning and development.
                </p>
                <p>
                    Being the preschool leader, I am responsible for supporting the staff team in their development and
                    learning. As a team we deliver a high-quality provision where the children are at the heart of
                    everything we do.
                </p>
            </StaffSection>
            <StaffSection
                style="standard"
                name="Jean Daubney"
                title="Deputy Manager, Leader of Sticky Mitts and Tiny Tots"
            >
                <p>
                    Level 5 in Young Children&apos;s Learning & Development. I endeavour to keep up to date and continue
                    my Early Years knowledge through online courses offered by Early Years providers. I started my Early
                    Years career in 2001 by becoming a volunteer at my local playgroup and progressed over the next 20
                    years through many roles to manager. I most enjoy working &ldquo;hands on&rdquo; with young children
                    encouraging them to learn and develop through their play.
                </p>
                <p>
                    My interests are travel both home and abroad, looking after my 2 guinea pigs, reading, knitting and
                    gardening.
                </p>
            </StaffSection>
            <StaffSection style="alt" name="Katie Prole" title="Early Years Practitioner">
                <p>
                    I have a Level 2 in Child Development and am currently studying for my Level 3 in Childcare and
                    Education. I have been part of Pandas since November 2019. Before that I volunteered in a primary
                    school in Early Years.
                </p>
                <p>In my free time, I like spending time with my family and friends.</p>
            </StaffSection>
            <StaffSection style="standard" name="Fallon Dawson" title="Early Years Practitioner">
                <p>
                    I have a Degree in Criminology and will soon be looking to gain a degree in Early Years. I have also
                    done work experience in a nursery, which is where my passion for Early years started.
                </p>
                <p>
                    In my spare time, I love going for days out with my daughter and spending lots of time with family
                    and friends.
                </p>
            </StaffSection>
        </Layout>
    );
};

export default StaffPage;

export const Head = () => <PageHead pageTitle={heading} />;
