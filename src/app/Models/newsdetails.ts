import { News } from './news';
export interface Newsdetails {
    id?:number;
    title?:string;
    newss?:string;
    publicationDate?:Date;
    creationDate?:Date;
    authorId?:number;
    authorName?:string;
    fileName?:string;
    contentType?:string;
    imageData?:string;
}
