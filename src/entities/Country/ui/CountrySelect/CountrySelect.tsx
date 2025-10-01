import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazahkstan, content: Country.Kazahkstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
  ];

  return (
    <ListBox
      className={className}
      value={value}
      onChange={onChangeHandler}
      items={options}
      defaultValue={t('Укажите страну')}
      readonly={readonly}
      direction="top right"
      label={t('Укажите страну')}
    />
  );
}); // будет перерисовка (массивы,объекты пропсов-всегда мемоизируешь)
