package Foodbox.example.Foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Foodbox.example.Foodbox.entity.AdminLogin;



@Repository
public interface LoginRepository extends JpaRepository<AdminLogin, Long> {

	@Query("SELECT p FROM AdminLogin p WHERE p.adminName=:keyword AND p.role=:role")
    public AdminLogin search(@Param("keyword") String keyword, @Param("role") String role);
}
