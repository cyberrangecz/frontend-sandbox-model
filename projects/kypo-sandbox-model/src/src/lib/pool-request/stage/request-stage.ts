/**
 * Class representing request stage
 */
import {RequestStageType} from '../../enums/request-stage-type.enum';
import {RequestStageState} from '../../enums/request-stage-state.enum';

export abstract class RequestStage {

  readonly type: RequestStageType;
  id: number;
  requestId: number;
  state: RequestStageState;
  errorMessage: string;
  start: Date;
  end: Date;

  protected constructor(type: RequestStageType) {
    this.type = type;
  }

  isInQueue() {
    return this.state === RequestStageState.IN_QUEUE;
  }

  isRunning() {
    return this.state === RequestStageState.RUNNING;
  }

  hasFailed() {
    return this.state === RequestStageState.FAILED;
  }

  hasFinished() {
    return this.state === RequestStageState.FINISHED;
  }

}
