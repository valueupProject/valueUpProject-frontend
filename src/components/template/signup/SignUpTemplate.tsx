import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import { Swiper as SwiperClass } from 'swiper/types';
import SwiperCore from 'swiper';
import GenderAgeInputForm from '@/components/pages/signup/gender-age-input-form';
import NameInputForm from '@/components/pages/signup/name-input-form';
import NavBtn from '@/components/pages/signup/nav-btn';
import TimePickerForm from '@/components/pages/signup/time-picker-form';
import TopBar from '@/components/pages/signup/top-bar';
import { SignUpStateType } from '@/constants/types';
import * as style from './SignUpTemplate.style';
import CategoryForm from '@/components/pages/signup/category-form';
import SuccessBox from '@/components/pages/signup/success-box';

interface SignUpTemplateProps {
  slideStep: number;
  signUpState: SignUpStateType;
  onClickNext: () => void;
  onClickPrev: () => void;
  setSwiperRef: Dispatch<SetStateAction<SwiperClass | undefined>>;
  onSlideChange: (swiper: any) => void;
  onChageNameInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (name: string, value: string) => void;
  checkSignupStep: () => boolean;
  onClickNavBtn: () => void;
  onChangeMeridiem: (text: string) => void;
  onChangeHour: (swiper: SwiperCore) => void;
  onChangeMin: (swiper: SwiperCore) => void;
  categoryTypeState: string;
  onClickCategory: (category: string) => void;
  onClickGenre: (genre: string) => void;
  onClickArtist: (artist: string) => void;
}
const SignUpTemplate = ({
  slideStep,
  signUpState,
  onClickNext,
  onClickPrev,
  setSwiperRef,
  onSlideChange,
  onChageNameInput,
  onChangeSelect,
  checkSignupStep,
  onClickNavBtn,
  onChangeMeridiem,
  onChangeHour,
  onChangeMin,
  categoryTypeState,
  onClickCategory,
  onClickGenre,
  onClickArtist,
}: SignUpTemplateProps) => (
  <style.Wrapper>
    <TopBar
      step={slideStep}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      isActivate={checkSignupStep()}
    />
    <style.Box>
      <style.CustomSwiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides
        noSwiping
        mousewheel={false}
        centerInsufficientSlides
        allowTouchMove={false}
        onSlideChange={onSlideChange}
      >
        <style.Slide>
          <NameInputForm
            onChange={onChageNameInput}
            len={signUpState.name.length}
          />
        </style.Slide>
        <style.Slide>
          <GenderAgeInputForm
            name={signUpState.name}
            gender={signUpState.gender}
            age={signUpState.age}
            onChageSelect={onChangeSelect}
          />
        </style.Slide>
        <style.Slide>
          <CategoryForm
            categoryTypeState={categoryTypeState}
            onClickCategory={onClickCategory}
            onClickGenre={onClickGenre}
            onClickArtist={onClickArtist}
          />
        </style.Slide>
        <style.Slide>
          <TimePickerForm
            meridiem={signUpState.time.meridiem}
            onChangeMeridiem={onChangeMeridiem}
            hour={signUpState.time.hour}
            onChangeHour={onChangeHour}
            min={signUpState.time.min}
            onChangeMin={onChangeMin}
          />
        </style.Slide>
        <style.Slide>
          <SuccessBox />
        </style.Slide>
      </style.CustomSwiper>
      <NavBtn isActivate={checkSignupStep()} onClick={onClickNavBtn} />
    </style.Box>
  </style.Wrapper>
);

export default SignUpTemplate;
