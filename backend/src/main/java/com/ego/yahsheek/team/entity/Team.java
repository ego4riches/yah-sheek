package com.ego.yahsheek.team.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "teams")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "team_key", unique = true, nullable = false, length = 50)
    private String teamKey;

    @Column(name = "team_name", nullable = false, length = 100)
    private String teamName;

    @Column(name = "ball_park", nullable = false, length = 100)
    private String ballPark;

    @Column(name = "logo_url", length = 500)
    private String logoUrl;

    @Column(name = "is_active")
    private boolean isActive = true;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Builder
    public Team(String teamKey, String teamName, String ballPark, String logoUrl) {
        this.teamKey = teamKey;
        this.teamName = teamName;
        this.ballPark = ballPark;
        this.logoUrl = logoUrl;
    }

    public void updateTeamInfo(String teamName, String ballPark, String logoUrl) {
        this.teamName = teamName;
        this.ballPark = ballPark;
        this.logoUrl = logoUrl;
    }

    public void deactivate() {
        this.isActive = false;
    }

    public void activate() {
        this.isActive = true;
    }
}
