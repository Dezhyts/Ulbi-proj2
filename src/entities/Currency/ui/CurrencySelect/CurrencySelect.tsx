import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
  ];

  return (
    <ListBox
      className={className}
      value={value}
      onChange={onChangeHandler}
      items={options}
      defaultValue={t('Укажите валюту')}
      readonly={readonly}
      direction="top right"
      label={t('Укажите валюту')}
    />
  );
}); // будет перерисовка (массивы,объекты пропсов-всегда мемоизируешь)
