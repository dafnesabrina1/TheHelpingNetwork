import React from 'react';
import { 
    CardImage, 
    CardInfo,
    CardTitle,
    Flex,
    FlexSpaceBetweenTop,
    FlexSpaceBetweenBottom,
    CardUserImage,
    CardUserName,
    EventCardContainer, 
    ProgressInfo } from './eventCard.style';
import { Line } from 'rc-progress';

const EventCard = () => {
  return (
    <EventCardContainer>
      <CardImage img="http://mxcity.mx/wp-content/uploads/2017/09/Topos-naranjas-.jpg"/>
      <CardInfo>
          <CardTitle>HELLO my name is Dafne, hah ahdgjhf hjgavcbjf vb vbifcjfcbsvx yugcvjbc v dc niudgvhs xcniusvx csx</CardTitle>
          <Flex>
            <CardUserImage img="https://upload.wikimedia.org/wikipedia/commons/2/2c/Diego_lainez_2.jpg"/>
            <CardUserName>Erick Solorio</CardUserName>
          </Flex>
      </CardInfo>
      <ProgressInfo>
          <FlexSpaceBetweenTop>
          <div>200 Volunteers</div>
          <div>12</div>
          </FlexSpaceBetweenTop>
          <FlexSpaceBetweenBottom>
          <div>of 300 Volunteers</div>
          <div>days left</div>
          </FlexSpaceBetweenBottom>
          <Line percent="40" strokeWidth="2" strokeColor="red" trailWidth="2" />
      </ProgressInfo>
    </EventCardContainer>
  );
};

export default EventCard;