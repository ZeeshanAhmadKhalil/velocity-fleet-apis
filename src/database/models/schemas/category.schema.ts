import {
    Prop,
    Schema,
    SchemaFactory
} from "@nestjs/mongoose";
import {
    HydratedDocument,
    Schema as MongooseSchema
} from "mongoose";
import { User } from "./user.schema";

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {

    @Prop({ required: true })
    name: string

    @Prop({ default: false })
    isDeleted: boolean

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'User',
        required: true,
    })
    user: User;
}


export const CategorySchema = SchemaFactory.createForClass(Category);