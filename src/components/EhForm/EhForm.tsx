/* eslint-disable @typescript-eslint/no-explicit-any */
import Form, {IChangeEvent} from '@rjsf/core'
import {RegistryFieldsType, RegistryWidgetsType, RJSFSchema, RJSFValidationError,} from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import PlanSelect from '../PlanSelect/PlanSelect.tsx'
import AnyOf from '../AnyOf/AnyOf.tsx'
import SelectWidget from "../SelectWidget/SelectWidget.tsx";
import ObjectFieldTemplate from "../ObjectFieldTemplate/ObjectFieldTemplate.tsx";
import AddonSelect from "../AddonSelect/AddonSelect.tsx";
import FieldTemplate from "../FieldTemplate/FieldTemplate.tsx";

const widgets: RegistryWidgetsType = {
  SelectWidget: SelectWidget,
  AddonSelectWidget: AddonSelect
}

const fields: RegistryFieldsType = {
  AnyOfField: AnyOf
}

const templates = {
  ObjectFieldTemplate,
  FieldTemplate
}

export const EhForm = ({ schema, uiSchema, formData }) => {
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
      formData={formData}
      validator={validator}
      onChange={(data) => getQuote(data)}
      onSubmit={(data) => issuePolicy(data)}
      onError={(errors) => handleErrors(errors)}
      templates={templates}
    />
  )
}

export default EhForm
