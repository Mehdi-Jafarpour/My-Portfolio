import React from 'react'
import {
  VerticalTimeline, 
  VerticalTimelineElement,}
from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

function Experiance() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date='2011-2015'
        iconStyle={{backgroundColor:"#3e497a", color:"#FFF"}}
        icon={<SchoolIcon />}>
          <h3>Bachelor of Computer Network Engineering</h3>
          <p>Tehran Azad University of Islamic Republic of Iran, Tehran</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date='2012-2013'
        iconStyle={{backgroundColor:"#3e497a", color:"#FFF"}}
        icon={<SchoolIcon />}>
          <h3>MCSA,MCSE</h3>
          <p>Tehran Institute of Technology, Tehran</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date='2012-2016'
        iconStyle={{backgroundColor:"#e9d35b", color:"#FFF"}}
        icon={<WorkIcon />}>
          <h3>Network Administrator</h3>
          <h4>Saipa (Vehicle Factory), Tehran, Iran</h4>
          <p>Head office network manager, doing website‑related affairs, monitoring the connection of
center office with main factory and solving the daily problems.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date='2016-2017'
        iconStyle={{backgroundColor:"#e9d35b", color:"#FFF"}}
        icon={<WorkIcon />}>
          <h3>Freelancer</h3>
          <h4>Tehran</h4>
          <p>Web developing and Designing.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date='2021'
        iconStyle={{backgroundColor:"#3e497a", color:"#FFF"}}
        icon={<SchoolIcon />}>
          <h3>React js and Redux</h3>
          <p>UDEMY (online course), Tbilisi</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date='2018-present'
        iconStyle={{backgroundColor:"#e9d35b", color:"#FFF"}}
        icon={<WorkIcon />}>
          <h3>Executive Vice President</h3>
          <h4>Shahrayn Co., Tbilisi</h4>
          <p>Sales manager and planner, web developing and network administrator. The company is not a
big scale one and one person have to do different rules to help the company to grow.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experiance