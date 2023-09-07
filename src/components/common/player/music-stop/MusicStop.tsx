import * as style from './MusicStop.style';

export const MusicStop = () => (
  <style.Wrapper>
    <style.TextBox>
      <style.TextTypography>종료하시겠습니까?</style.TextTypography>
    </style.TextBox>
    <style.ButtonBox>
      <style.Button
        onClick={() => {
          console.log('예');
        }}
      >
        <style.YesTypography>예</style.YesTypography>
      </style.Button>
      <style.Line />
      <style.Button
        onClick={() => {
          console.log('아니요');
        }}
      >
        <style.NoTypography>아니요</style.NoTypography>
      </style.Button>
    </style.ButtonBox>
  </style.Wrapper>
);
