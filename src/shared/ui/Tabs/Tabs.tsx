import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string | number> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string | number> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabCLick: (tab: TabItem<T>) => void;
}

function TabsComponent<T extends string | number>(props: TabsProps<T>) {
  const { className, tabs, value, onTabCLick } = props;

  const clickHandle = useCallback(
    (tab: TabItem<T>) => () => onTabCLick(tab),
    [onTabCLick]
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value as unknown as string} // или number
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
}

// Обертка memo без потери дженерика
export const Tabs = memo(TabsComponent) as typeof TabsComponent;
