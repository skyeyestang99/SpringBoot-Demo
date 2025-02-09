package SpringBoot.Demo.OrderService.controller;

import SpringBoot.Demo.OrderService.entity.Order;
import SpringBoot.Demo.OrderService.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/orders")
@CrossOrigin(origins = {
        "http://localhost:4200",
        "http://order-service-frontend.s3-website.us-east-2.amazonaws.com"
})
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAllOrder() {
        return orderService.getAllOrder();
    }

    @PostMapping
    public Order createOrder(@RequestParam Long userId, @RequestParam Long productId, @RequestParam Integer quantity) {
        return orderService.createOrder(userId,productId,quantity);
    }

    @PutMapping("/{id}")
    public Order updateProduct(@PathVariable Long id, @RequestBody Order updatedProduct) {
        return orderService.updateProduct(id, updatedProduct);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
    }

    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id) {
        return orderService.getOrder(id);
    }
}
