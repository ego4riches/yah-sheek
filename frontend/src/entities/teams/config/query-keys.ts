export const TEAMS_QUERY_KEYS = {
    all: ['teams'],
    detail: (key: string) => [...TEAMS_QUERY_KEYS.all, 'detail', key],
};