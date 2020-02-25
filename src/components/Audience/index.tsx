import React from 'react';
import styled from 'styled-components';
import textBalloonAImage from './textBalloonA.png';
import textBalloonBImage from './textBalloonB.png';

const Audience: React.FC = () => {
  return (
    <AudienceSeats>
      <AudiencePair style={{ top: '50%' }}>
        <TextBalloonA style={{ right: '10%' }}>
          <TextBox>仕上がってる！</TextBox>
          <NameTag>ほげさん</NameTag>
        </TextBalloonA>
        <TextBalloonB
          style={{
            transform: 'scale(-1, 1)',
            left: '10%',
          }}
        >
          <TextBox style={{ transform: 'scale(-1, 1)', left: '110px' }}>
            仕上がってる！
          </TextBox>
          <NameTag
            style={{ transform: 'scale(-1, 1)', top: '245px', left: '185px' }}
          >
            ふがさん
          </NameTag>
        </TextBalloonB>
      </AudiencePair>
    </AudienceSeats>
  );
};

const AudienceSeats = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
`;

const AudiencePair = styled.div`
  position: absolute;
  height: 400px;
  width: 100%;
`;

const TextBalloonA = styled.div`
  position: absolute;
  background-image: url(${textBalloonAImage});
  width: 400px;
  height: 400px;
`;

const TextBalloonB = styled.div`
  position: absolute;
  background-image: url(${textBalloonBImage});
  width: 400px;
  height: 400px;
`;

const TextBox = styled.span`
  display: block;
  font-size: 30px;
  font-weight: bold;
  writing-mode: vertical-rl;
  width: 100px;
  position: absolute;
  top: 40px;
  left: 60px;
`;

const NameTag = styled.span`
  position: absolute;
  writing-mode: vertical-rl;
  top: 235px;
  left: 195px;
  font-weight: bold;
  font-size: 20px;
`;

export default Audience;
