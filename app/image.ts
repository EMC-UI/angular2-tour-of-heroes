export class Image {
    path: string;
    extension: string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
