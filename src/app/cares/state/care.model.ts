import { ID } from '@datorama/akita';


export interface CareRefund {
  id: ID;
  transmission: string;
  sendDate: Date;
  refundDate: Date;
  amount: number;
  onAccount: Date;
}
export interface Care {
  id: ID;
  description: string;
  beneficiary: string;
  professional: string;
  date: string;
  payor: string;
  paidAmount: number;
  paymentMethod: string;
  healthCard: string;
  completed: number;
  refunds: CareRefund[];
}

/**
 * A factory function that creates Care
 */
export function createCare(params: Partial<Care>) {
  return {

  } as Care;
}
