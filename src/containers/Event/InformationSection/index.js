// Libraries
import React, { Component } from 'react';
import axios from 'axios';
import { Line } from 'rc-progress';

// Styles
import SectionContainer from '../../../style';
import {
  QuestionDiv,
  QuestionTitle,
  QuestionDesc,
  Grid,
  Left,
  Right,
  CompanyInfo,
  CompanyImg,
  Top,
  FlexSpaceBetweenBottom,
  FlexSpaceBetweenTop
} from './informationSection.style';
import companyIMG from '../../../assets/company.png';

class InformationSection extends Component {
  render() {
    return (
      <SectionContainer style={{ paddingLeft: '6rem', paddingTop: '5rem' }}>
        {console.log(this.props.participants.payload)}
        <Grid>
          <Left>
            <QuestionDiv>
              <QuestionTitle>What is the event about?</QuestionTitle>
              <QuestionDesc>
                {this.props.data.payload.properties.p1}
              </QuestionDesc>
            </QuestionDiv>

            <QuestionDiv>
              <QuestionTitle>
                What kind of help are we looking for?
              </QuestionTitle>
              <QuestionDesc>
                {this.props.data.payload.properties.p2}
              </QuestionDesc>
            </QuestionDiv>

            <QuestionDiv>
              <QuestionTitle>Activites </QuestionTitle>
              <QuestionDesc>
                {this.props.data.payload.properties.p3}
              </QuestionDesc>
            </QuestionDiv>
          </Left>
          <Right>
            <CompanyInfo>
              <Top>
                <CompanyImg img={this.props.companyData.properties.image} />
                <p style={{ fontSize: '1.3rem', marginTop: '0.55em' }}>
                  {this.props.companyData.properties.name}
                </p>
              </Top>

              <div style={{ marginTop: '1rem' }}>
                <FlexSpaceBetweenTop>
                  {this.props.participants.payload == undefined && (
                    <div>Loading...</div>
                  )}
                  {this.props.participants.payload && (
                    <div>
                      {this.props.participants.payload.length} Volunteers
                    </div>
                  )}
                </FlexSpaceBetweenTop>
                <FlexSpaceBetweenBottom>
                  <div>
                    of {this.props.data.payload.properties.capacity} Volunteers
                  </div>
                </FlexSpaceBetweenBottom>

                {this.props.participants.payload == undefined && (
                  <div>Loading...</div>
                )}
                {this.props.participants.payload && (
                  <Line
                    percent={this.props.participants.payload.length}
                    strokeWidth='2'
                    strokeColor='red'
                    trailWidth='2'
                  />
                )}
              </div>
            </CompanyInfo>
          </Right>
        </Grid>
      </SectionContainer>
    );
  }
}

export default InformationSection;
