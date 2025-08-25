export interface UserProfile {
  identification: string;
  name: string;
  lastname: string;
  address: string;
  city: string;
  email: string;
  balance: number;
}

export interface IConsumption {
  id: number;
  date: string;
  // mb_used: number;
  // minutes_used: number;
  client: number;
  mb: {
    additional: number;
    balance: number;
    limit_plan: number;
    used: number;
  };
  minutes: {
    additional: number;
    balance: number;
    limit_plan: number;
    used: number;
  };
}

export interface IPlan {
  id: number;
  name: string;
  base_price: number;
  mb_included: number;
  mb_price: number;
  minute_price: number;
  duration: number;
  created_at: string;
}

export interface IInvoice {
  user_id: number;
  detail: {
    base_price: number;
    mb_extras: number;
    minutes_extras: number;
    mb_price_extras: number;
    minutes_price_extras: number;
    mb_plan: number;
    minutes_plan: number;
  };
  invoice: {
    total: number;
    taxes: number;
    val_taxes: number;
    subtotal: number;
  };
}
