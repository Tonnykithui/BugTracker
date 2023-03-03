interface IResponseMessage {
    messsage: string,
    data: any,
    error?: []
}

export class ResponseMessage implements IResponseMessage {
    messsage: string;
    data: any;
    error?;
}