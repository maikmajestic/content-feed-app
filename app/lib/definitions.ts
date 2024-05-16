export interface ContentCard {
  id: string;
  imageUri: string;
  metadata: {
    priority: number;
    publishDate: string;
  };
  textData: {
    title: string;
    subTitle: string;
    body: string;
    author: Author;
  };
  comments: Comment[]; 
}

interface Comment {
  author: string;
  likes: number;
  profilePic: string;
  text: string;
}

interface Author {
  first: string;
  last: string;
}