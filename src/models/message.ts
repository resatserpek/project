export interface Message{
    content: string;
    displayName: string;
    time: firebase.firestore.Timestamp;
    isCurrent?: boolean;
}