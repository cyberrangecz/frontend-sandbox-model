import { RequestStageType } from '../../enums/request-stage-type.enum';
import { CleanupRequestStage } from './cleanup-request-stage';

export class OpenStackCleanupStage extends CleanupRequestStage {
  allocationStageId: number;

  constructor() {
    super(RequestStageType.OPEN_STACK_CLEANUP);
  }
}
