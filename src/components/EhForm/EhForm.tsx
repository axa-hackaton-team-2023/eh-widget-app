/* eslint-disable @typescript-eslint/no-explicit-any */
import Form, { IChangeEvent } from '@rjsf/core'
import {
  RegistryFieldsType,
  RegistryWidgetsType,
  RJSFSchema,
  RJSFValidationError,
} from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import AnyOf from '../AnyOf/AnyOf.tsx'
import SelectWidget from '../SelectWidget/SelectWidget.tsx'
import ObjectFieldTemplate from '../ObjectFieldTemplate/ObjectFieldTemplate.tsx'
import AddonSelect from '../AddonSelect/AddonSelect.tsx'
import FieldTemplate from '../FieldTemplate/FieldTemplate.tsx'
import { useState } from 'react'

const widgets: RegistryWidgetsType = {
  SelectWidget: SelectWidget,
  AddonSelectWidget: AddonSelect,
}

const fields: RegistryFieldsType = {
  AnyOfField: AnyOf,
}

const templates = {
  ObjectFieldTemplate,
  FieldTemplate,
}

export const EhForm = ({ schema, uiSchema, formData }) => {
  const [priceData, setPriceData] = useState<any>(null)
  const [internalFormData, setInternalFormData] = useState<any>(formData)

  const getQuote = (e: IChangeEvent<unknown, RJSFSchema, any>) => {
    if (!e?.formData) return
    fetch(
      'https://axa-api-platform.eh.dev.app.fioneer.com/api/v1/propositions/4/quote/calculation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(e.formData),
      },
    )
      .then((res) => res.json())
      .then((res) => {
        setPriceData(res)
        setInternalFormData(e.formData)
      })
  }

  const issuePolicy = (data: IChangeEvent<unknown, RJSFSchema, any>) => {
    console.log('ISSUE POLICY', data)
  }

  const handleErrors = (errors: RJSFValidationError[]) => {
    console.log(errors)
  }

  return (
    <>
      {priceData &&
        priceData.planPrice.map((price: any) => (
          <div>
            {price.planId} - {price.price}
          </div>
        ))}
      <Form
        fields={fields}
        widgets={widgets}
        schema={schema}
        uiSchema={uiSchema}
        formData={internalFormData}
        validator={validator}
        onChange={(data) => getQuote(data)}
        onSubmit={(data) => issuePolicy(data)}
        onError={(errors) => handleErrors(errors)}
        templates={templates}
      />
    </>
  )
}

export default EhForm
