import { EventEmitter } from "@angular/core";

export function stringEmitter(string: string): void {
    new EventEmitter<string>().emit(string);
}