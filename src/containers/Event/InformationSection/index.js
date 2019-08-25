// Libraries
import React from 'react';
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

const InformationSection = () => {
  return (
    <SectionContainer style={{ paddingLeft: '6rem', paddingTop: '5rem' }}>
      <Grid>
        <Left>
          <QuestionDiv>
            <QuestionTitle>What is the event about?</QuestionTitle>
            <QuestionDesc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              culpa quam, doloribus maxime nisi officiis! Magnam soluta odio
              dolorum error, rerum sequi provident, non doloremque ipsam quidem,
              accusamus deleniti commodi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod vel magni est laboriosam veniam delectus
              ullam commodi quaerat optio, inventore consequuntur facere? Ad
              consectetur ullam laborum exercitationem vero consequatur impedit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              cumque quam ab veniam optio modi maxime quaerat animi esse ratione
              itaque debitis laboriosam sapiente autem mollitia officiis placeat
              laborum corrupti!
            </QuestionDesc>
          </QuestionDiv>

          <QuestionDiv>
            <QuestionTitle>What kind of help are we looking for?</QuestionTitle>
            <QuestionDesc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              culpa quam, doloribus maxime nisi officiis! Magnam soluta odio
              dolorum error, rerum sequi provident, non doloremque ipsam quidem,
              accusamus deleniti commodi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quis possimus facere a veritatis,
              non nihil, iste iure sint praesentium quidem, impedit corporis ab
              <br />
              <br />
              tempore ducimus atque voluptate deserunt labore adipisci! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Cum ducimus,
              commodi laborum consequatur perspiciatis harum aliquam aspernatur,
              vero voluptatem sint tempora quos. Quibusdam, quae inventore. Sed
              praesentium harum consequatur laudantium?
            </QuestionDesc>
          </QuestionDiv>

          <QuestionDiv>
            <QuestionTitle>Activites </QuestionTitle>
            <QuestionDesc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              culpa quam, doloribus maxime nisi officiis! Magnam soluta odio
              dolorum error, rerum sequi provident, non doloremque ipsam quidem,
              accusamus deleniti commodi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi nisi praesentium voluptates nulla dolorum
              quae quam porro.
              <br />
              <br />
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elite.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elite.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elite.
                </li>
              </ul>
              <br />
              Obcaecati in saepe modi qui suscipit, commodi impedit nulla
              incidunt illum autem. Voluptatem. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Atque at esse rem totam dicta
              perferendis reprehenderit molestiae nisi, quam, quisquam
              doloribus, nam animi cum natus. Quos repudiandae excepturi facilis
              beatae?
            </QuestionDesc>
          </QuestionDiv>
        </Left>
        <Right>
          <CompanyInfo>
            <Top>
              <CompanyImg img={companyIMG} />
              <p style={{ fontSize: '1.3rem', marginTop: '0.55em' }}>
                The Boring Company
              </p>
            </Top>

            <div style={{ marginTop: '1rem' }}>
              <FlexSpaceBetweenTop>
                <div>200 Volunteers</div>
                <div>12</div>
              </FlexSpaceBetweenTop>
              <FlexSpaceBetweenBottom>
                <div>of 300 Volunteers</div>
                <div>days left</div>
              </FlexSpaceBetweenBottom>
              <Line
                percent='40'
                strokeWidth='2'
                strokeColor='red'
                trailWidth='2'
              />
            </div>
          </CompanyInfo>
        </Right>
      </Grid>
    </SectionContainer>
  );
};

export default InformationSection;
