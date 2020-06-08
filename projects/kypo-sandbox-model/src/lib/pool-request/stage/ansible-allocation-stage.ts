import { KypoPaginatedResource } from 'kypo-common';
import { RequestStageType } from '../../enums/request-stage-type.enum';
import { AllocationRequestStage } from './allocation-request-stage';

/**
 * Class representing ansible stage
 */
export class AnsibleAllocationStage extends AllocationRequestStage {
  repoUrl: string;
  rev: string;

  constructor() {
    super(RequestStageType.ANSIBLE_ALLOCATION);
  }
}
