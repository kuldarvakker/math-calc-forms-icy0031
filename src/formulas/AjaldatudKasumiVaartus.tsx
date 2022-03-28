import {FormEvent} from "react";

export const AjaldatudKasumiVaartus = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2] / 100;

    let result : number = 0;
    let resultString : string = "";
    for (let i = 1; i < a + 1; i++) {
        resultString += b + "/" + "(" + 1 + "+ " + c + ")" + "**" + i;
        if (i < a) {
            resultString += " + ";
        }
        result += b / Math.pow((1 + c), i);
    }
    return [result, resultString]
}

export const Tulumaar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1] / 365;
    let c = numbers[2];

    let result : number = 0;
    let resultString : string = "";
    result = Math.pow(c / a, 1 / b) - 1;
    resultString = "ehk " + (result * 100) + "%";
    return [result, resultString]
}


export const Roi = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1];

    let result : number = 0;
    let resultString : string = "";
    result = (b - a) / a;
    resultString = "ehk " + (result * 100) + "%";
    return [result, resultString]
}


export const RoiYearly = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2];

    let result : number = 0;
    let resultString : string = "";
    result = ((c - a) / a) / (b / 365);
    resultString = "ehk " + (result * 100) + "%";
    return [result, resultString]
}

export const RoaRoe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1];

    let result : number = 0;
    let resultString : string = "";
    result = a / b;
    resultString = "ehk " + (result * 100) + "%";
    return [result, resultString]
}

export const TasuvusAeg = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1];

    let result : number = 0;
    let resultString : string = "";
    result = a / b;
    resultString = "aastaga";
    return [result, resultString]
}


export const TasuvusPunkt = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2];

    let result : number = 0;
    let resultString : string = "";
    result = b / (1 - (a/c));
    return [result, resultString]
}
