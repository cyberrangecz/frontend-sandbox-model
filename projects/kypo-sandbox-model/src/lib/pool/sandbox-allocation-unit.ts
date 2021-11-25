import { CleanupRequest } from '../pool-request/cleanup-request';
import { AllocationRequest } from './../pool-request/allocation-request';
import { CreatedBy } from './created-by';
export class SandboxAllocationUnit {
  id: number;
  poolId: number;
  allocationRequest: AllocationRequest;
  cleanupRequest: CleanupRequest;
  createdBy: CreatedBy;
}
