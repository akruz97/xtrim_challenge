import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../../../core/services/plan/plan.service';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { IInvoice } from '../../../../shared/interfaces';
import { InvoiceService } from '../../../../core/services/invoice/invoice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice',
  imports: [CommonModule],
  templateUrl: './invoice.html',
  styleUrl: './invoice.css',
})
export class Invoice implements OnInit {
  invoiceData: IInvoice = {
    user_id: 0,
    detail: {
      base_price: 0,
      mb_plan: 0,
      mb_extras: 0,
      mb_price_extras: 0,
      minutes_plan: 0,
      minutes_extras: 0,
      minutes_price_extras: 0,
    },
    invoice: {
      subtotal: 0,
      taxes: 0,
      total: 0,
      val_taxes: 0,
    },
  };

  constructor(
    private planService: PlanService,
    private auth: AuthService,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    this.getInvoiceData();
  }

  getInvoiceData(): void {
    // Lógica para obtener los datos de la factura
    const userId = this.auth.getUserId();

    console.log('ID recibido en dashboard:', userId);
    if (!userId) {
      return;
    }

    this.invoiceService.getInvoice(userId).subscribe((data: IInvoice) => {
      this.invoiceData = data;
      // console.log('Obteniendo datos de la factura...');
      console.log('Datos de la factura:', data);
    });
  }
}
