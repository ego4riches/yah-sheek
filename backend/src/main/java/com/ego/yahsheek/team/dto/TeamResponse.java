package com.ego.yahsheek.team.dto;

import com.ego.yahsheek.team.entity.Team;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TeamResponse {
    private Long id;
    private String teamKey;
    private String teamName;
    private String ballPark;
    private String logoUrl;

    public static TeamResponse from(Team team) {
        return new TeamResponse(
                team.getId(),
                team.getTeamKey(),
                team.getTeamName(),
                team.getBallPark(),
                team.getLogoUrl()
        );
    }
}
