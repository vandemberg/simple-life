export interface MemberI {
  id: string;
  name: string;
  role: string;
  jira?: {
    jiraId: string;
    goal: string;
    project: string;
  };
}
