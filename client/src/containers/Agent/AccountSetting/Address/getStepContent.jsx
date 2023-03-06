import React from 'react'

export const getStepContent = (step, setStep, stateArr, districtArr, cityArr, setState, setDistrict, setCity, setDrop, setBorder) => {
    switch (step) {
        case 0:
            return <>
                {
                    stateArr?.map(item => (
                        <div key={item.name}>
                            <input type="text" value={item.name} alt={item.code} readOnly onClick={(e) => {
                                setState(e)
                                setDistrict('')
                                setCity('')
                                setStep(1)
                                setBorder(1)
                            }} />
                        </div>
                    ))
                }
            </>
        case 1:
            return <>
                {
                    districtArr?.districts?.map(item => (
                        <div key={item.name}>
                            <input type="text" value={item.name} alt={item.code} readOnly onClick={(e) => {
                                setDistrict(e)
                                setCity('')
                                setStep(2)
                                setBorder(2)
                            }} />
                        </div>
                    ))
                }
            </>
        case 2:
            return <>
                {
                    cityArr?.wards?.map(item => (
                        <div key={item.name}>
                            <input type="text" value={item.name} alt={item.code} readOnly onClick={(e) => {
                                setCity(e)
                                setStep(0)
                                setDrop(false)
                                setBorder(0)
                            }} />
                        </div>
                    ))
                }
            </>

        default:
            throw new Error("Unknown step");
    }
}
