export interface LoginInputsType {
  email: string;
  password: string;
}

/**
 * time-picker 정의를 위한 type
 */
export interface TimeType {
  /** AM/PM */
  meridiem: string;
  /** 시간 1 ~ 12 */
  hour: number;
  /** 분 0 ~ 59 */
  min: number;
}

/** 남성/ 여성/ 선택 안함*/
export type GenderType = 'm' | 'f' | 'x';
/** 20대 미만/ 20대/ 30대/ 40대/ 50대 이상/ 선택안함 */
export type AgeType = '19' | '20' | '30' | '40' | '50' | 'x';

export type DuplicateOptionType = 'email' | 'nickname';

export interface RegisterInputsType extends LoginInputsType {
  passwordCheck: string;
  name: string;
  gender: GenderType;
  age: number;
  profileImg: string;
  nickname: string;
}

export interface LoginAsyncInput {
  email: string;
  password: string;
}

export interface LoginAsyncOutput {
  token: string;
}

export type InputNameType = keyof RegisterInputsType;
