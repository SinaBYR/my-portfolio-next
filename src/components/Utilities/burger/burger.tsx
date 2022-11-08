import classes from './burger.module.scss';
import { useContext } from 'react';
import { colors } from '../../../color-palette/color-palette';
import { ThemeContext } from '../../../dark-mode-future/theme-context';

type Props = {
  open: boolean;
  click: React.MouseEventHandler<HTMLDivElement>
}

function Burger({ open, click }: Props) {
  const dark = useContext(ThemeContext);
  const classNames = [classes.burger, open ? classes.open : null].join(' ');

  return (
    <div className={classNames} onClick={click}>
      <div style={{
        backgroundColor: dark ? colors.light.primary : colors.dark.secondary
      }}></div>
      <div style={{
        backgroundColor: dark ? colors.light.primary : colors.dark.secondary
      }}></div>
      <div style={{
        backgroundColor: dark ? colors.light.primary : colors.dark.secondary
      }}></div>
    </div>
  )
}

export { Burger }