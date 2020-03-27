import {CleanupRequestStage} from './cleanup-request-stage';
import {RequestStageType} from '../../enums/request-stage-type.enum';

export class AnsibleCleanupStage extends CleanupRequestStage {
  allocationStageId: number;

  constructor() {
    super(RequestStageType.ANSIBLE_CLEANUP);
  }
}
