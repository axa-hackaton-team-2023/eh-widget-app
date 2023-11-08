import classes from './AddonSelectWidget.module.scss';
import FieldTemplate from "@rjsf/mui/lib/FieldTemplate";

const AddonSelect = ({label, ...props}) => {
    console.log(props);
    return (
        <div className={classes.addonSelect}>
            {label}
        </div>
    )
}

FieldTemplate

export default AddonSelect;