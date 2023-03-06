import ListAddress from "./ListAddress";
import NewAddress from "./NewAddress";
import UpdateAddress from "./UpdateAddress";

//step components
export function getSteps(step, setStep, setOpen, updateAdr, setUpdateAdr) {
    switch (step) {
        case 0:
            return <ListAddress setOpen={setOpen} setStep={setStep} setUpdateAdr={setUpdateAdr} />
        case 1:
            return <NewAddress setStep={setStep} />
        case 2:
            return <UpdateAddress setStep={setStep} step={step} updateAdrs={updateAdr} />

        default:
            throw new Error("Unknown step");
    }
}

// step address
export function getStepContentDrop(step, setStep, stateArr, districtArr, cityArr, setState, setDistrict, setCity, setDrop) {
    switch (step) {
        case 0:
            return <>
                {
                    stateArr.map(item => (
                        <div key={item.name} className='list-item'>
                            <input type="text" value={item.code} alt={item.name} onClick={e => {
                                setState(e)
                                setDistrict('')
                                setCity('')
                                setStep(1)
                            }}
                                readOnly />
                            <div>{item.name}</div>
                        </div>
                    ))
                }
            </>
        case 1:
            return <>
                {
                    districtArr?.districts?.map(item => (
                        <div key={item.name} className='list-item'>
                            <input type="text" value={item.code} alt={item.name} onClick={e => {
                                setDistrict(e)
                                setCity('')
                                setStep(2)
                            }}
                                readOnly
                            />
                            <div>{item.name}</div>
                        </div>
                    ))
                }
            </>
        case 2:
            return <>
                {
                    cityArr?.wards?.map(item => (
                        <div key={item.name} className='list-item'>
                            <input type="text" value={item.code} alt={item.name} onClick={e => {
                                setCity(e)
                                setStep(0)
                                setDrop(false)
                            }}
                                readOnly
                            />
                            <div>{item.name}</div>
                        </div>
                    ))
                }
            </>

        default:
            throw new Error("Unknown step");
    }
}