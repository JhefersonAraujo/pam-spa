import Card from "../card";

const IcDetail = ({title}) => {
  return(
      <>
        <span className="line"/>
        <div className="grid-container-details">
          <div>
            <div>
              <button class="ic-btn ic-btn-small round">97%</button>
              <p>Transferência</p>
            </div>
            <Card value="94" label="Válvula Gaveta"/>
          </div>

          <div>
            <div>
              <button class="ic-btn ic-btn-small round">97%</button>
              <p>Distribuição</p>
            </div>
            <Card value="93" label="Distribuidor"/>
          </div>

          <div>
            <div>
              <button class="ic-btn ic-btn-small round">97%</button>
              <p>Ligotamento</p>
            </div>
            <Card value="81" label="Mesa Osciladora"/>
            <Card value="99" label="Molde"/>
            <Card value="98" label="Sprays"/>
            <Card value="79" label="Extratora"/>
          </div>
        </div>
      </>
  )
}

export default IcDetail;