import {OptionType} from "../types/types";

export const initialState = {
    disableFatherName: false,
    disableIPN: false,
    sexOptions: [
        {label: '', value: '--Вибрати--'},
        {label: 'man', value: 'Чоловіча'},
        {label: 'woman', value: 'Жіноча'}],
    docsOptions: [
        {label: '', value: '--Вибрати--'},
        {label: 'additionalProtectPersonDoc', value: 'Посвідчення особи, яка потребує додаткового захисту'},
        {label: 'idCardDoc', value: 'Паспорт (ID-картка)'},
        {label: 'bookPassportDoc', value: 'Паспорт книжечка'},
        {label: 'permResidenceDoc', value: 'Посвідка на постійне проживання в Україні'},
        {label: 'refugeeCardDoc', value: 'Посвідка біженця'},
        {label: 'refugeeStarchDoc', value: 'Посвідка на проживання'},
        {label: 'temporaryCertificateDoc', value: 'Тимчасове посвідчення громадянина України'}
    ],
    touchOptions: [
        {label: '', value: '--Вибрати--'},
        {label: 'email', value: 'Електронною поштою'},
        {label: 'phone', value: 'Телефоном'},
    ]
}

export const formReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'DISABLE-FATHER-NAME':
            return {...state, disableFatherName: action.isDisableFN}
        case 'DISABLE-IPN':
            return {...state, disableIPN: action.isDisableIPN}
        default:
            return state
    }
}

export const isDisableFatherNameAC = (isDisableFN: boolean) => ({type: 'DISABLE-FATHER-NAME', isDisableFN} as const)
export const isDisableIPNAC = (isDisableIPN: boolean) => ({type: 'DISABLE-IPN', isDisableIPN} as const)

export type isDisableFatherNameAT = ReturnType<typeof isDisableFatherNameAC>
export type isDisableIPNAT = ReturnType<typeof isDisableIPNAC>


export type InitialStateType = {
    disableFatherName: boolean
    disableIPN: boolean
    sexOptions: OptionType[]
    docsOptions: OptionType[]
    touchOptions: OptionType[]
}

type ActionsType = isDisableFatherNameAT | isDisableIPNAT
