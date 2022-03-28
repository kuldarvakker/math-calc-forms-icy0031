import {FormEvent} from "react";

export const Tulevik = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2] / 100;

    let result : number = 0;
    let resultString : string = "";
    result = a * Math.pow( 1+ c, b);
    resultString = "miljonites?";
    return [result, resultString]
}

export const Tulevik2 = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2] / 100;

    let result : number = 0;
    let resultString : string = "";
    result = a / Math.pow(1+c, b);
    return [result, resultString]
}

export const Diskonto = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1] / 100;
    let c = numbers[2];
    let d = numbers[3];

    let result : number = 0;
    let resultString : string = "";
    result = a / Math.pow(1+b, c);
    resultString = "b) " + (a / Math.pow(1+b, c-d)).toString();
    return [result, resultString]
}


export const Kupong = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2];
    let d = numbers[3] / 100;

    let result : number = 0;
    let resultString : string = "";
    for (let i = 1; i < b + 1; i++) {
        if (i === b) {
            resultString += "( (" + a +"+"+c+" ) / ("+ (1+d) + ")**"+i +")"
            result += ((a + c) / Math.pow(1+d,i));
        } else {
            resultString += "(" +c+ "/ ("+ (1+d) + ")**"+i+")";
            result += c / Math.pow(1+d,i);
        }
        if (i < b) {
            resultString += " + ";
        }
    }
    return [result, resultString]
}

export const Diskonto2 = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2];

    let result : number = 0;
    let resultString : string = "";
    result = Math.pow(b / a, 1 / c) - 1;
    resultString = "ehk " + (result * 100) + "%"
    return [result, resultString]
}


export const Diskonto3 = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
        .map(i => parseFloat((i as HTMLInputElement).value))];
    let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2] / 100;

    let result : number = 0;
    let resultString : string = "";
    result = Math.log(b / a) / Math.log(1 + c)
    resultString = "... aasta pärast."
    return [result, resultString]
}

