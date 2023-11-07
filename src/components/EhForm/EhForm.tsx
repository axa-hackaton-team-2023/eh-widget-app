/* eslint-disable @typescript-eslint/no-explicit-any */
import {IChangeEvent} from '@rjsf/core'
import Form from '@rjsf/mui'
import {RegistryFieldsType, RegistryWidgetsType, RJSFSchema, RJSFValidationError} from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import PlanSelect from "../PlanSelect/PlanSelect.tsx";
import AnyOf from "../AnyOf/AnyOf.tsx";

const widgets: RegistryWidgetsType = {
  PlanSelectWidget: PlanSelect
}

const fields: RegistryFieldsType = {
  AnyOfField: AnyOf
}

const templates ={
}

export const EhForm = ({propositionId, schema, uiSchema, data}) => {
  const getQuote = (data: IChangeEvent<unknown, RJSFSchema, any>) => {
    console.log(data)
    console.log('GET QUOTE')
  }

  const issuePolicy = (data: IChangeEvent<unknown, RJSFSchema, any>) => {
    console.log(data)
    console.log('ISSUE POLICY')
  }

  const handleErrors = (errors: RJSFValidationError[]) => {
    console.log(errors)
  }

  return (
    <Form
      fields={fields}
      widgets={widgets}
      schema={schema}
      uiSchema={uiSchema}
      formData={data}
      validator={validator}
      onChange={(data) => getQuote(data)}
      onSubmit={(data) => issuePolicy(data)}
      onError={(errors) => handleErrors(errors)}
      templates={templates}
    />
  )
}

export default EhForm
