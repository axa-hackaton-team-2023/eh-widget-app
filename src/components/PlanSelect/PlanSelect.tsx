import classes from './PlanModule.module.scss'
import { FC } from 'react'
import Button from '../Button/Button.tsx'

interface PlanItem {
  properties: {
    name: any
    id: any
    price?: any
    currency?: any
  }
}

const PlanSelect: FC<any> = ({ schema, uiSchema, onChange, ...props }) => {
  const items = schema.anyOf

  return (
    <div className={classes.planSelect}>
      {items.map((item: PlanItem) => {
        const plan = item.properties

        const selected = props.formData.id === plan.id.default

        return (
          <div className={classes.planSelectItem} key={plan.id.default}>
            <div className={classes.planSelectItemHeader}>
              <div className={classes.planTitle}>{plan.name.default}</div>
              <div className={classes.planPrice}>
                {plan.price?.default} {plan.currency?.default}
              </div>
              <div className={classes.planDescription}>{}</div>

              <Button
                selected={selected}
                outline={!selected}
                onClick={() => {
                  onChange({
                    id: plan.id.default,
                  })
                }}
              >
                {selected ? (
                  <>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.528 17.198L5.0105 12.6805L3.47217 14.208L9.528 20.2638L22.528 7.26383L21.0005 5.73633L9.528 17.198Z"
                        fill="white"
                      />
                    </svg>
                    Selected
                  </>
                ) : (
                  'Select'
                )}
              </Button>
            </div>

            <div className={classes.planSelectItemContent}></div>
          </div>
        )
      })}
    </div>
  )
}

export default PlanSelect
