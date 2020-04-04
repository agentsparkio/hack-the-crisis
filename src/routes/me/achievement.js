import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {
    Icon,
} from "@blueprintjs/core";
import './timeline.min.css';
import stubData from "./achievements.json";
import "./achievement.css";

function Achievement() {
  return (
    <div className="Achievement">
      <VerticalTimeline>
        {stubData.achievements.length && stubData.achievements.map(event => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: `${event.colour}`, color: '#fff' }}
                contentArrowStyle={{ borderRight: `7px solid  ${event.colour}` }}
                date={event.datetimestamp}
                iconStyle={{ background: '#efefef', color: `${event.colour}` }}
                icon={<Icon icon={event.badge} />}
              >
                <h3 className="vertical-timeline-element-title">{event.details}</h3>
                <h4 className="vertical-timeline-element-subtitle">{event.points} GREEN POINTS</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
              </VerticalTimelineElement>
            ))}
      }
      </VerticalTimeline>
      
    </div>
  );
}

export default Achievement;
