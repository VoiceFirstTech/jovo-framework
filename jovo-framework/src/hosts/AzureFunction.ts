import {Host} from "jovo-core";

export class AzureFunction implements Host {
    headers: {[key: string]: string};
    hasWriteFileAccess = false;
    req: any; // tslint:disable-line
    context: any; // tslint:disable-line
    $request: any; // tslint:disable-line

    constructor(context: any, req: any) { // tslint:disable-line
        this.req = req;
        this.context = context;
        this.headers = req.headers;
        this.$request = req.body;
    }

    getRequestObject() {
        return this.$request;
    }

    setResponse(obj: any) { // tslint:disable-line
        return new Promise<void>((resolve) => {
            this.context.res = {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: obj,
            };
            this.context.done();
            resolve();
        });
    }
}
