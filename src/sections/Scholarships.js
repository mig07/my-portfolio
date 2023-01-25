import Section from "../components/Section";
import SectionItem from "../components/SectionItem";
import SectionItemIcon from "../components/SectionItemIcon";
import InescIcon from "../imgs/INESC-ID.svg";

export default function Scholarships() {
  return (
    <Section title={"Scholarships"}>
      <SectionItem
        icon={
          <SectionItemIcon
            src={InescIcon}
            alt="INESC-ID"
            href="https://www.inesc-id.pt/"
          />
        }
        title={"NGPHYLO - PTDC/CCI-BIO/29676/2017"}
        subtitle={
          "INESC-ID: Instituto de Engenharia de Sistemas e Computadores: Investigação e Desenvolvimento em Lisboa"
        }
        description={"December, 2021 - June, 2022"}
      />
    </Section>
  );
}
