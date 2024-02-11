import React from 'react'
import { Card } from 'react-bootstrap';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

const SingleOverallOEETrackerComponent = ({data}) => {
  // console.log({data})
  const { title, percentage } = data;
  return (
    <Card style={{ width: "12rem", minHeight: "16rem" }}>
      <Card.Body className="d-flex flex-column  justify-content-around align-items-center ">
        <Card.Title>{title}</Card.Title>
        <div style={{ width: 100, height: 100 }}>
          <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={16}
            styles={buildStyles({
              rotation:0.10,
              textSize: '16px',
              pathTransitionDuration: 0.7,
              strokeLinecap: 'round',
              pathColor: `rgba(62, 152, 199, ${70 / 100})`,
              textColor: '#f88',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          >
            <div>
              <strong>
                {`${percentage}%`}
              </strong>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </Card.Body>
    </Card>
  );

}

export default SingleOverallOEETrackerComponent
