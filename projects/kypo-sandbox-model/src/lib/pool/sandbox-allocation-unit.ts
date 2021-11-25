import { CleanupRequest } from '../pool-request/cleanup-request';
import { AllocationRequest } from './../pool-request/allocation-request';
export class SandboxAllocationUnit {
  id: number;
  poolId: number;
  allocationRequest: AllocationRequest;
  cleanupRequest: CleanupRequest;
}
