import PlanSelect from "../PlanSelect/PlanSelect.tsx";
import {FC} from "react";
import AnyOfField from "@rjsf/core/lib/components/fields/MultiSchemaField";

const AnyOfWidgets = {
    PlanSelect: PlanSelect
}
const AnyOf: FC<any> = ({...props}) => {
    const widget = props.uiSchema['ui:widget'];

    if(widget){
        // @ts-ignore
        const Component = AnyOfWidgets[widget];
        return <Component {...props}/>;
    }

    return <AnyOfField {...props}/>;
}

export default AnyOf;