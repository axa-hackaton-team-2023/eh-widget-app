import classes from './Button.module.css'
import {FC} from "react";
import clsx from "clsx";

export const Button: FC<any> = ({children, outline = false, selected = false, ...props}) => {
  return (
      <button
        {...props}
        type="button"
        className={clsx(classes.button, {
            [classes.outlinedButton]: outline,
            [classes.selectedButton]: selected
        })}
      >
          {children}
      </button>
  )
}

export default Button
