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