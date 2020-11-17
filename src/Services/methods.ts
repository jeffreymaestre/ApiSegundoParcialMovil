import { DeleteResult } from "typeorm";

export interface methods<T> {
    get(): Promise<T[]>;
    getOne(Id: number): Promise<T>;
    set(object: T): Promise<T>;
    delete(id: number): Promise<DeleteResult>;
}