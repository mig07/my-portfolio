import Section from "../components/Section";
import SectionItem from "../components/SectionItem";

export default function Publications() {
  return (
    <Section title={"Publications"}>
      <SectionItem
        title={"FLOWViZ: Framework for Phylogenetic Processing"}
        subtitle={"INForum 2022 conference"}
        description={
          <>
            <p>8th of September 2022 - 9th of September 2022</p>
            <p>
              In the context of my Master's Thesis, I submitted an article to
              the{" "}
              <a href="https://inforum.org.pt/2022/index.html">INForum 2022</a>{" "}
              conference. The article was accepted and I had the opportunity to
              publicly present my work on the 8th of September 2022, at the{" "}
              <a href="http://politecnicoguarda.pt/">
                Polytechnic Institute of Guarda
              </a>
              .
            </p>
            <p>
              Link:{" "}
              <a href="https://inforum.org.pt/2022/sites/default/files/2022-09/Actas_INForum.pdf#page=224">
                https://inforum.org.pt/2022/sites/default/files/2022-09/Actas_INForum.pdf#page=224
              </a>
            </p>
          </>
        }
      />
      <SectionItem
        title={"FLOWViZ: Framework for Phylogenetic Processing"}
        subtitle={"arxiv.org"}
        description={
          <p>
            Link:{" "}
            <a href="https://arxiv.org/abs/2211.15282">
              https://arxiv.org/abs/2211.15282
            </a>
          </p>
        }
      />
    </Section>
  );
}
