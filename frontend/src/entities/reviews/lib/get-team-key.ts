import {TEAMS} from "@/shared";

// 일치하는 팀 KEY 있을 경우 KEY 반환, 불일치 시 null 반환
export const getTeamKey = (team: string) => {
    const teams = Object.values(TEAMS);
    const found = teams.find((t) => t.KEY === team);
    return found ? found.KEY : null;
}