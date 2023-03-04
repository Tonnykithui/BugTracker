interface IResponseMessage {
    messsage: string,
    data: any,
    error?: []
}

export class ResponseMessage implements IResponseMessage {
    messsage: string
    data: any;
    error?;
    constructor(message: string, data: any, error?: any){
        this.messsage = message
        this.data = data;
        this.error = error;
    }
}