import { Injectable } from "@angular/core";

// if we dont use Injectable put this code on app.module.ts provider
// @Injectable({
//     providedIn: 'root'
// })
export class LoggingService {
    lastlog: string;

    printLog(message: string) {
        console.log(message);
        console.log(this.lastlog);
        this.lastlog = message;
    }
}