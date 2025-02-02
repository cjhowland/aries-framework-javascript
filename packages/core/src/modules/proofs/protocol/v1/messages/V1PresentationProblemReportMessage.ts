import type { ProblemReportMessageOptions } from '../../../../problem-reports/messages/ProblemReportMessage'

import { IsValidMessageType, parseMessageType } from '../../../../../utils/messageType'
import { ProblemReportMessage } from '../../../../problem-reports/messages/ProblemReportMessage'

export type V1PresentationProblemReportMessageOptions = ProblemReportMessageOptions

/**
 * @see https://github.com/hyperledger/aries-rfcs/blob/main/features/0035-report-problem/README.md
 */
export class V1PresentationProblemReportMessage extends ProblemReportMessage {
  /**
   * Create new PresentationProblemReportMessage instance.
   * @param options description of error and multiple optional fields for reporting problem
   */
  public constructor(options: V1PresentationProblemReportMessageOptions) {
    super(options)
  }

  @IsValidMessageType(V1PresentationProblemReportMessage.type)
  public readonly type = V1PresentationProblemReportMessage.type.messageTypeUri
  public static readonly type = parseMessageType('https://didcomm.org/present-proof/1.0/problem-report')
}
