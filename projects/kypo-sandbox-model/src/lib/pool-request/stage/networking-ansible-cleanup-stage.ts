import { RequestStageType } from '../../enums/request-stage-type.enum';
import { CleanupRequestStage } from './cleanup-request-stage';

export class NetworkingAnsibleCleanupStage extends CleanupRequestStage {
  allocationStageId: number;

  constructor() {
    super(RequestStageType.NETWORKING_ANSIBLE_CLEANUP);
  }
}
