import { Image } from './image';

export class Comic {
    id: number;
    title: string;
    issueNumber: number;
    name: string;
    description: string;
    thumbnail: Image;
    pageCount: number;
    images: Array<Image>;
}
