package Foodbox.example.Foodbox.service;

import java.util.Set;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Foodbox.example.Foodbox.dto.Purchase;
import Foodbox.example.Foodbox.dto.PurchaseResponse;
import Foodbox.example.Foodbox.entity.Order;
import Foodbox.example.Foodbox.entity.OrderItem;
import Foodbox.example.Foodbox.repository.PurchaseRepository;


@Service
public class CheckoutService {
	@Autowired
	private PurchaseRepository purchaseRepository;
	
	@Transactional
	public PurchaseResponse placeOrder(Purchase purchase) {

        // retrieve the order info from dto
        Order order = purchase.getOrder();

        // generate tracking number
        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        // populate order with orderItems
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));

        // populate order with billingAddress and shippingAddress
        order.setBillingAddress(purchase.getBillingAddress());
        order.setShippingAddress(purchase.getShippingAddress());
        

        // save to the database
         purchaseRepository.save(order);

        // return a response
        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {

        // generate a random UUID number (UUID version-4)
        // For details see: https://en.wikipedia.org/wiki/Universally_unique_identifier
        //
        return UUID.randomUUID().toString();
    }

}
