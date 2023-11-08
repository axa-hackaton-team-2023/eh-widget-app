import EhForm from '../EhForm/EhForm'
import { useEffect, useState } from 'react'
import mock from '../../mock.json';
import classes from './Widget.module.scss';

export const Widget = ({ propositionId }) => {
  const [spec, setSpec] = useState<any>(null)

  useEffect(() => {
    // setSpec(mock);

    // FOR DEV ENV
    // fetch(`local-proxy/propositions/${propositionId}/widget-spec`)
    fetch(`https://axa-api-platform.eh.dev.app.fioneer.com/api/v1/propositions/${propositionId}/widget-spec`)
      .then((res) => res.json())
      .then((res) => {
        // console.log({...res, uiSchema: mock.uiSchema})
        setSpec({...res, uiSchema: mock.uiSchema})
      })
  }, [propositionId])

  return (
    <div className={classes.widgetCard}>
      <img
         style={{
             width: '100%'
         }}
        src="https://brandcenter.axa.ch/m/66513f897677d0ee/WIDE_1920_480_WebP-frau_hund_lachen_balkon_gluecklich_web.webp"
        alt="card banner"
      />

      <div className="card-body pt-4">
          <div className={classes.widgetCardContent}>
            <h3>
              AXA dog first insurance
            </h3>

            <p className="card-title display-5">Pet Insurance</p>
            <p >Insurance that loves your pet as much as you do</p>

             {spec && (
                 <EhForm
                     propositionId={propositionId}
                     schema={spec.jsonSchema}
                     uiSchema={spec.uiSchema}
                     formData={spec.formData}
                 />
             )}
         </div>

      </div>
    </div>
  )
}

export default Widget
