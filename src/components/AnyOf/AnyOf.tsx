import PlanSelect from '../PlanSelect/PlanSelect.tsx'
import AnyOfField from '@rjsf/core/lib/components/fields/MultiSchemaField'

const AnyOfWidgets = {
  PlanSelect: PlanSelect,
}

const AnyOf  = (props: any) => {
  const widget = props.uiSchema && props.uiSchema['ui:widget']

  if (widget) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const Component = AnyOfWidgets[widget]
    return <Component {...props} />
  }

  return <AnyOfField {...props} />
}

export default AnyOf
