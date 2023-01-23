import Section from "../components/Section";
import SectionItem from "../components/SectionItem";

export default function Career() {
  return (
    <Section title={"Scholarships"}>
      <SectionItem
        title={"IPL/2021/DIVA_ISEL"}
        subtitle={"IPL: Instituto Politécnico de Lisboa"}
        duration={"March 2022 - July 2022"}
      />
      <SectionItem
        title={"NGPHYLO"}
        subtitle={
          "INESC-ID: Instituto de Engenharia de Sistemas e Computadores: Investigação e Desenvolvimento em Lisboa"
        }
        duration={"December 2021 - March 2022"}
      />
    </Section>
  );
}
