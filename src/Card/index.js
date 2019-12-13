import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
// import { createRequire } from 'module';

const BiggerOnTheInside = () => {
  return (
    <div className="bigger-on-the-inside">
    <CardTitle className="tardis-inside text-muted big-blue-box">Box</CardTitle>
    <div className="tardis-inside text-muted stacked">Public<br/>Call</div>
    <CardTitle className="tardis-inside text-muted big-blue-box">Police</CardTitle>
    </div>
  )
}

const BlueBox = (props) => {
  // props [src, alt, title, desc, date]
  return (
    <div>
      <Card>
        <CardBody>
        <BiggerOnTheInside />        
          <CardImg bottom width="100%" src={props.src} alt={props.alt} />
        <CardTitle>{props.title}</CardTitle>
          <CardText>{props.desc || "watch doctor who"}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlueBox;
