export const TEAMS_QUERY_KEYS = {
    BASE: 'teams',
    TEAM: (teamKey: string) => `${TEAMS_QUERY_KEYS.BASE}, ${teamKey}`,
}