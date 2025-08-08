package com.ego.yahsheek.team.repository;

import com.ego.yahsheek.team.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TeamRepository extends JpaRepository<Team, Long> {
    Optional<Team> findByTeamKey(String teamKey);
}
