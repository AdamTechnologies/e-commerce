import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ProductCategory {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ default: 'everyWhere' })
  available: string;

  @Prop({ default: 'admin' })
  createdBy: string;

  @Prop({ default: true })
  is_active: boolean;

  @Prop({ default: false })
  is_deleted: boolean;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now })
  modified_at: Date;
}

export const ProductCategorySchema =
  SchemaFactory.createForClass(ProductCategory);
