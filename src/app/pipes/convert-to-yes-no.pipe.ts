import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToYesNo'
})
export class ConvertToYesNo implements PipeTransform {
    transform(value: boolean): string {
        return (value ? 'yes' : 'no');
    }
}