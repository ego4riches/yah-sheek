package com.ego.yahsheek.team.controller;

import com.ego.yahsheek.team.dto.TeamResponse;
import com.ego.yahsheek.team.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/teams")
public class TeamController {

    private final TeamService teamService;

    @GetMapping
    public List<TeamResponse> getTeams() {
        return teamService.getTeams();
    }

    @GetMapping("/{teamKey}")
    public TeamResponse getTeam(@PathVariable String teamKey) {
        return teamService.getTeamByKey(teamKey);
    }
}
