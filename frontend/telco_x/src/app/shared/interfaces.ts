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
