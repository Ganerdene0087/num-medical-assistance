export interface ITreatment {
  _id: string;
  clientId: string;
  inspectionId: string;
  isDone: boolean;
  type: string;
  createdAt?: string;
  updatedAt?: string;
  frequency: number;
}
