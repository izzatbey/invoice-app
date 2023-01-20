import { forwardRef, Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceModel } from './invoice.model';
import { CustomerModule } from 'src/customer/customer.module';


@Module({
  imports: [TypeOrmModule.forFeature([InvoiceModel]), forwardRef(() => CustomerModule)],
  exports: [InvoiceService],
  providers: [InvoiceService, InvoiceResolver]
})
export class InvoiceModule {}
