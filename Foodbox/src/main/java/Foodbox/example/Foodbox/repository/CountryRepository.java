package Foodbox.example.Foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Foodbox.example.Foodbox.entity.Country;



@Repository
public interface CountryRepository extends JpaRepository<Country, Integer> {

}
