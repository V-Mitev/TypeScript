import { BaseContent, ContentType, IDconstraint } from "./models";

export abstract class DetailedContent implements BaseContent {
    readonly id: number;
    readonly title: string;
    readonly releaseDate: Date;
    private _type: ContentType;

    constructor(id: number, title: string, releaseDate: Date, type: ContentType) {
        this.id = id;
        this._type = type;
        this.title = title;
        this.releaseDate = releaseDate;
    }

    get type(): ContentType {
        return this._type;
    }

    set type(value: ContentType) {
        throw new Error("Content type is immutable");
    }

    abstract getDetails(): string;
}

export class Movie extends DetailedContent {
    readonly director: string;

    constructor(id: number, title: string, releaseDate: Date, director: string) {
        super(id, title, releaseDate, ContentType.Movie);

        this.director = director;
    }

    getDetails(): string {
        const date = this.releaseDate.toLocaleDateString("en-GB");

        return `[MOVIE] "${this.title}" directed by ${this.director} (Released: ${date})`;
    }
}

export class Series extends DetailedContent {
    readonly platformUrl: string;

    constructor(id: number, title: string, releaseDate: Date, platformUrl: string) {
        super(id, title, releaseDate, ContentType.Series);

        this.platformUrl = platformUrl;
    }

    getDetails(): string {
        const date = this.releaseDate.toLocaleDateString("en-GB");

        return `[SERIES] "${this.title}" (Released: ${date}), available at: ${this.platformUrl}`;
    }
}

export function findItemById<T extends IDconstraint>(objects: T[], objectID: number): T | undefined {
    return objects.find(item => item.id === objectID);
}