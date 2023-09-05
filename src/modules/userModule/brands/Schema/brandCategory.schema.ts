import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class BrandCategory {
  @Prop({ required: true })
  category_id: string;

  @Prop({ required: true })
  brand_name: string;

  @Prop()
  description: string;

  @Prop()
  logo: string;

  @Prop({ default: 'everyWhere' })
  available: string;

  @Prop({ default: 'user' })
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

export const brandCategorySchema =
  SchemaFactory.createForClass(BrandCategory);
