package Foodbox.example.Foodbox.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Foodbox.example.Foodbox.entity.State;

@Repository
public interface StateRepository extends JpaRepository<State, Integer> {

	List<State> findByCountryId(int countryId);

}
