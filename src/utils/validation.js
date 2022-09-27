export const validation = event => {
    const {
        IPN,
        city,
        country,
        fatherName,
        firstName,
        issuedBy,
        lastName,
        secretWord,
        passportNum,
        uniqueNumber,
        validUntil,
        birthday,
        issuedDate,
        email,
        phone,
        sex,
        doc
    } = event

    const errors = {}

    const dateValidator = value => {
        const patternTest = /([0]?[1-9]|[1|2][0-9]|[3][0|1])[.]([0]?[1-9]|[1][0-2])[.]([0-9]{4})$/;
        if (!patternTest.test(value)) {
            return 'Поле не відповідає формату ДД.ММ.РРРР'
        }
    }

    if (!firstName) errors.firstName = 'Поле не може бути пустим'
    if (!lastName) errors.lastName = 'Поле не може бути пустим'

    if (!birthday) {
        errors.birthday = 'Поле не може бути пустим'
    } else {
        errors.birthday = dateValidator(event.birthday)
    }

    if (validUntil) errors.validUntil = dateValidator(event.validUntil)

    if (!issuedDate) {
        errors.issuedDate = 'Поле не може бути пустим'
    } else {
        errors.issuedDate = dateValidator(event.issuedDate)
    }

    if (!country) errors.country = 'Поле не може бути пустим'
    if (!city) errors.city = 'Поле не може бути пустим'

    if (!secretWord) {
        errors.secretWord = 'Поле не може бути пустим'
    } else {
        if (secretWord.length < 6) errors.secretWord = 'Поле має складати не менше 6 символів'
    }

    if (!issuedBy) errors.issuedBy = 'Поле не може бути пустим'
    if (sex === '--Вибрати--') errors.sex = 'Вкажіть стать'
    if (doc === '--Вибрати--') errors.doc = 'Вкажіть тип документу, який посвідчує особу'

    if (email) {
        const patternEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!patternEmail.test(email)) {
            errors.email = 'Не коректна поштова адреса'
        }
    }

    if (phone) {
        const patternPhone = /^[\+]{0,1}380([0-9]{9})$/;
        if (!patternPhone.test(phone)) {
            errors.phone = 'Некоректний номер телефона. Приклад: +380939998877';
        }
    }

    if (!IPN.isDisable) {
        if (!IPN.value) {
            errors.IPN = 'Поле не може бути пустим'
        } else {
            if (IPN.value.length !== 10) {
                errors.IPN = 'Поле має складати 10 цифр'
            } else {
                const findNotNumber = [...IPN.value].find(el => isNaN(+el))
                if (findNotNumber) errors.IPN = 'Поле має складатись тільки з цифр'
            }
        }
    }

    if (!fatherName.isDisable && !fatherName.value) errors.fatherName = 'Поле не може бути пустим'

    if (!passportNum) {
        errors.passportNum = 'Поле не може бути пустим'
    } else {
        let count = 0;
        [...passportNum].forEach(el => !isNaN(+el) && count++)
        if (count !== 9) errors.passportNum = 'Номер введено некоректно, поле повинно містити 9 цифр'
    }

    if (uniqueNumber) {
        if (uniqueNumber.length === 14) {
            const stringConcat = [...uniqueNumber].slice(0, 8).concat([...uniqueNumber].slice(9, 14))
            const findNotNumber = stringConcat.find(el => isNaN(+el))
            if (findNotNumber) errors.uniqueNumber = 'Поле має складатись тільки з цифр'
            if (uniqueNumber[8] !== '-') errors.uniqueNumber = 'Поле не відповідає формату РРРРММДД-ХХХХХ'
        } else {
            if (event.uniqueNumber.length === 13) {
                if (![...uniqueNumber].includes('-')) {
                    errors.uniqueNumber = 'Поле не відповідає формату РРРРММДД-ХХХХХ'
                } else {
                    errors.uniqueNumber = 'Номер введено некоректно, поле повинно містити 13 цифр'
                }
            } else {
                errors.uniqueNumber = 'Номер введено некоректно, поле повинно містити 13 цифр'
            }
        }
    }

    return errors
}