import { useState } from 'react';
import { Header } from '../header';
import IcDetail from '../ic-details';

export default function Overview() {
    const [active, setActive] = useState();

    return(
        <>
            <div className='grid-container'>
                <div>
                    <Header />
                </div>
                <div>
                    <button class="ic-btn ic-btn-mid round" onClick={() => setActive("ICA")}>97% ICA</button>
                    <button class="ic-btn ic-btn-mid round" onClick={() => setActive("ICE")}>97% ICE</button>
                    <button class="ic-btn ic-btn-mid round" onClick={() => setActive("ICM")}>97% ICM</button>
                    <button class="ic-btn ic-btn-mid round" onClick={() => setActive("ICO")}>97% ICO</button>
                </div>
                <div>
                    {active === "ICA" && <IcDetail title="ICA" />}
                    {active === "ICE" && <IcDetail title="ICE"/>}
                    {active === "ICM" && <IcDetail title="ICM"/>}
                    {active === "ICO" && <IcDetail title="ICO"/>}
                </div>
                <div>
                    <button class="ic-btn ic-btn-big round">97% IDO</button>
                </div>
            </div>
        </>
    );
}