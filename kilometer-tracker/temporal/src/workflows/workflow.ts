import { proxyActivities } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from '../activities/activity';

const { greet } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

export async function example(name: string): Promise<string> {
  return await greet(name);
}