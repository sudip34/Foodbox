package Foodbox.example.Foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Foodbox.example.Foodbox.entity.Order;

@Repository
public interface PurchaseRepository extends JpaRepository<Order, Integer>{

}
