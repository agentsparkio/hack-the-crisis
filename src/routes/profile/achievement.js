import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {
    Icon,
} from "@blueprintjs/core";
import './timeline.min.css';
import stubData from "./achievements.json";
import "./achievement.css";
import Badge from "../../components/badge/badge";

function Achievement() {
  return (
    <div className="Achievement container">
      <VerticalTimeline>
        {stubData.achievements.length && stubData.achievements.map(event => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#efefef', color: '#fff' }}
                contentArrowStyle={{ borderRight: `7px solid  #efefef` }}
                date={event.datetimestamp}
                iconStyle={{ background: '#efefef', color: `${event.colour}` }}
                icon={<Icon icon={event.badge} />}
              >
                <Badge points={event.details} icon={event.badge} />
                <div className="right Achievement__points"><Badge points={event.points} /></div>
                <div className="clear" />
              </VerticalTimelineElement>
            ))}
      }
      </VerticalTimeline>
      
    </div>
  );
}

export default Achievement;
