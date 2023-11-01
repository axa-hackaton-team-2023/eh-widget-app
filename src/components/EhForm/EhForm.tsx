/* eslint-disable @typescript-eslint/no-explicit-any */
import { IChangeEvent } from '@rjsf/core'
import Form from '@rjsf/mui'
import { RJSFSchema, RJSFValidationError } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'

const schema: RJSFSchema = {
  type: 'object',
  required: ['customer'],
  properties: {
    customer: {
      type: 'object',
      title: 'Personal Information',
      required: ['firstName', 'lastName'],
      properties: {
        salutation: {
          type: 'string',
          title: 'Salutation',
          enum: ['Mr', 'Mrs', 'Dr'],
        },
        firstName: {
          type: 'string',
          title: 'First Name',
        },
        lastName: {
          type: 'string',
          title: 'Last Name',
        },
      },
    },
    pets: {
      type: 'array',
      title: 'Pets',
      items: {
        type: 'object',
        required: ['race', 'age'],
        properties: {
          race: {
            type: 'string',
            title: 'Race',
            description: 'Dog Race',
          },
          age: {
            title: 'Age',
            description: 'Dog Age',
            type: 'integer',
            minimum: 0,
            maximum: 30,
          },
        },
      },
    },
  },
}

const formData = {
  pets: [
    {
      race: 'Labrador',
      age: 3,
    },
    {
      race: 'Golden Retriever',
      age: 2,
    },
  ],
}

const uiSchema = {
  firstName: {
    'ui:classNames': 'form-control',
  },
  age: {
    'ui:widget': 'range',
    'ui:classNames': 'form-range',
  },
  'ui:submitButtonOptions': {
    submitText: 'Confirm Details',
    norender: false,
    props: {
      disabled: false,
      className: 'btn btn-primary',
    },
  },
}

export const EhForm = () => {
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
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      validator={validator}
      onChange={(data) => getQuote(data)}
      onSubmit={(data) => issuePolicy(data)}
      onError={(errors) => handleErrors(errors)}
    />
  )
}

export default EhForm
