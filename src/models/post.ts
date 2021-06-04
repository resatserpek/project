export interface Post {
    avatar: string;
    userID: string;
    displayName: string;
    content: string;
    mediaURL?: string;
    time: firebase.firestore.Timestamp;
    isSong: boolean;
  }