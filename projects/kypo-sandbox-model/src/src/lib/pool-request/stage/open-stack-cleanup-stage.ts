import {CleanupRequestStage} from './cleanup-request-stage';
import {RequestStageType} from '../../enums/request-stage-type.enum';

export class OpenStackCleanupStage extends CleanupRequestStage {

  allocationStageId: number;

  constructor() {
    super(RequestStageType.OPENSTACK_CLEANUP);
  }
}
