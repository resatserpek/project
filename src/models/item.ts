export interface Item{
    categories: string[];
    date: firebase.firestore.Timestamp;
    description: string;
    displayName: string;
    id?: string;
    price: number;
    title: string;
    url: string;    
    userId: string;
    userPic: string;   
}