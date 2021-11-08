package Foodbox.example.Foodbox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Foodbox.example.Foodbox.dto.Purchase;
import Foodbox.example.Foodbox.dto.PurchaseResponse;
import Foodbox.example.Foodbox.entity.Order;
import Foodbox.example.Foodbox.repository.PurchaseRepository;
import Foodbox.example.Foodbox.service.CheckoutService;



@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CheckoutController {
	@Autowired
	private CheckoutService checkoutService;
	
	@Autowired
	private PurchaseRepository purchaseRepo;
	
	 @PostMapping("/checkout/purchase")
	    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

	        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

	        return purchaseResponse;
	    }
	 @GetMapping("/checkout/orders")
	    public List<Order> getOrder() {
	        return this.purchaseRepo.findAll();
	    }

}
