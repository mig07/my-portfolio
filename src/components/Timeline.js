import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <div class="p-5 mb-4 bg-light rounded-3">
      <h1>Professional Timeline</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="2020 - 2022"
          iconStyle={{ background: "#000", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MSc Computer Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Instituto Superior de Engenharia de Lisboa
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Lisbon, Portugal
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2016 - 2020"
          iconStyle={{ background: "#000", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            BSc Computer Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Instituto Superior de Engenharia de Lisboa
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Lisbon, Portugal
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2013 - 2016"
          iconStyle={{ background: "#000", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">High School</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Colégio Bartolomeu Dias
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Lisbon, Portugal
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
