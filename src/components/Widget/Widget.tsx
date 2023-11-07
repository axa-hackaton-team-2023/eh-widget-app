import EhForm from '../EhForm/EhForm'
import {useEffect, useState} from "react";
import mock from '../../mock.json';

export const Widget = ({propositionId}) => {
    const [spec, setSpec] = useState<any>(null);

    useEffect(() => {
        setSpec(mock);
        fetch(`https://axa-api-platform.eh.dev.app.fioneer.com/api/v1/propositions/${propositionId}/widget-spec`).then(res => res.json()).then(res => {
            console.log(res);
        })
    }, [propositionId]);

    return (
        <div className="card">
            <img
                src="https://brandcenter.axa.ch/m/66513f897677d0ee/WIDE_1920_480_WebP-frau_hund_lachen_balkon_gluecklich_web.webp"
                alt="card banner"
            />

            <div className="card-body pt-4">
                <h3 className="card-subtitle text-secondary">
                    Axa <span className="text-muted">dog first insurance</span>
                </h3>

                <p className="card-title display-5">Pet Insurance</p>
                <p className="card-text">Insurance that loves your pet as much as you do</p>
                <div className="px-11">
                    {spec && <EhForm
                        schema={spec.schema}
                        uiSchema={spec.uiSchema}
                        data={spec.data}
                        propositionId={propositionId}/>}
                </div>
            </div>
        </div>
    )
}

export default Widget
