import classes from './AddonSelectWidget.module.scss';
import AXACheckbox from "../AXACheckbox/AXACheckbox.tsx";

const AddonSelect = ({label, value, onChange, ...props}) => {

    console.log(value);
    return (
        <div className={classes.addonSelect}>
            <AXACheckbox label={label} checked={value === '1'} variant={'checkmark'} onChange={(e) => {
                // @ts-ignore
                onChange(e.target.checked ? '1' : '2')
            }}/>
        </div>
    )
}

export default AddonSelect;