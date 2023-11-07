import classes from './PlanModule.module.scss';
import {FC} from "react";

interface PlanItem{
    properties: {
        name: any;
        currency: any;
        id: any;
        price: any;
    }
}

const PlanSelect: FC<any> = ({schema, uiSchema}) => {
    const items = schema?.anyOf;

    console.log(uiSchema)

    return (
        <div className={classes.planSelect}>
            {items.map((item: PlanItem) => {
                const plan = item.properties;
                return (
                    <div className={classes.planSelectItem} key={plan.id.default}>
                        <div className={classes.planSelectItemHeader}>
                            <div className={classes.planTitle}>{plan.name.default}</div>
                            <div className={classes.planPrice}>{plan.price.default} {plan.currency.default}</div>
                            <div className={classes.planDescription}>{}</div>
                        </div>

                        <div className={classes.planSelectItemContent}>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PlanSelect;