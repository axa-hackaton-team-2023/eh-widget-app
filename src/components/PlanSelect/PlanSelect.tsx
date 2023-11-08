import classes from './PlanModule.module.scss'
import { FC } from 'react'
import Button from '../Button/Button.tsx'
import AXAList from "../AXAList/AXAList.tsx";

interface PlanItem {
  properties: any
}

const PlanSelect: FC<any> = ({ schema, uiSchema, onChange, ...props }) => {
  const items = schema.anyOf

  const planPrices = props.formContext?.priceData?.planPrice || [];

  return (
    <div className={classes.planSelect}>
      {items.map((item: PlanItem) => {
        const plan = item.properties

        const selected = props.formData.id === plan.id.default

        const planPrice = planPrices.find(item => item.planId == plan.id.default);

        return (
          <div className={classes.planSelectItem} key={plan.id.default}>
            <div className={classes.planSelectItemHeader}>
              <div className={classes.planTitle}>{plan.name.default}</div>
              <div className={classes.planPrice}>
                {planPrice?.price} CHF
              </div>
              <div className={classes.planDescription}>{

              }</div>

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

            <div className={classes.planSelectItemContent}>
              <AXAList icon={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%231cc54e" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`} variant={'icon'}>
                {plan.coverages.enum.map((coverage: any) => {
                  return (
                      <li style={{
                        backgroundPosition: '0 0',
                        fontSize: '12px'
                      }}>{coverage}</li>
                  )
                })}
              </AXAList>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PlanSelect
