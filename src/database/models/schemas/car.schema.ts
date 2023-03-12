import {
    Prop,
    Schema,
    SchemaFactory
} from "@nestjs/mongoose";
import {
    HydratedDocument,
    Schema as MongooseSchema
} from "mongoose";
import { Category } from "./category.schema";
import { User } from "./user.schema";

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {

    @Prop({ required: true })
    color: string

    @Prop({ required: true })
    model: string

    @Prop({ required: true })
    make: string

    @Prop({ required: true })
    registrationNo: string

    @Prop({ required: true })
    topSpeed: string

    @Prop({ default: false })
    isDeleted: boolean

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'Category',
        required: true,
    })
    category: Category;

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'User',
        required: true,
    })
    user: User;
}


export const CarSchema = SchemaFactory.createForClass(Car);