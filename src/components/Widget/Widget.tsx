import EhForm from '../EhForm/EhForm'

export const Widget = () => (
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
        <EhForm />
      </div>
    </div>
  </div>
)

export default Widget
