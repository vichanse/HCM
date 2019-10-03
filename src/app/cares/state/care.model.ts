export interface CareRefund {
  transmission: string;
  sendDate: Date;
  refundDate: Date;
  amount: number;
  onAccount: Date;
}
export interface Care {
  id: string;
  description: string;
  beneficiary: string;
  professional: string;
  date: string;
  payor: string;
  paidAmount: number;
  paymentMethod: string;
  healthCard: string;
  completed?: number;
  refunds: CareRefund[];
  comment?: string;
}

/**
 * A factory function that creates Care
 */
export function createCare(params: Partial<Care>) {
  return {} as Care;
}
