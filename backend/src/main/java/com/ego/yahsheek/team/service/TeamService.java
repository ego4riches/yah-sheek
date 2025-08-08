package com.ego.yahsheek.team.service;

import com.ego.yahsheek.common.exception.BusinessException;
import com.ego.yahsheek.common.exception.ExceptionCode;
import com.ego.yahsheek.team.dto.TeamResponse;
import com.ego.yahsheek.team.entity.Team;
import com.ego.yahsheek.team.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TeamService {
    private final TeamRepository teamRepository;

    public List<TeamResponse> getTeams() {
        return teamRepository.findAll().stream()
                .filter(Team::isActive)
                .map(TeamResponse::from)
                .toList();
    }

    public TeamResponse getTeamByKey(String teamKey) {
        Team team = teamRepository.findByTeamKey(teamKey)
                .filter(Team::isActive)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
        return TeamResponse.from(team);
    }
}
