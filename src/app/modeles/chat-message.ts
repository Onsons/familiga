export class ChatMessage {
    $key?: string;
    message?: string;
    timeSent?: Date = new Date();
    userName?: string;
    email?: string;
}
