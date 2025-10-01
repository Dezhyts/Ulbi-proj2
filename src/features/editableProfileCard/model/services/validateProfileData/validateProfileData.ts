import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { first, lastname, age, country } = profile;
  const errors: ValidateProfileError[] = [];

  // Проверяем, что имя и фамилия указаны
  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  // Проверяем возраст
  if (!age || !Number.isInteger(age) || age <= 0) {
    errors.push(ValidateProfileError.INCORRECT_USER_AGE);
  }

  // Проверяем, что страна указана
  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_USER_COUNTRY);
  }

  return errors;
};
