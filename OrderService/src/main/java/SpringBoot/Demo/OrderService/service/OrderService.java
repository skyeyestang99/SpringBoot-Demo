package SpringBoot.Demo.OrderService.service;

import SpringBoot.Demo.OrderService.entity.Order;
import SpringBoot.Demo.OrderService.entity.Product;
import SpringBoot.Demo.OrderService.entity.User;
import SpringBoot.Demo.OrderService.repository.OrderRepository;
import SpringBoot.Demo.OrderService.repository.ProductRepository;
import SpringBoot.Demo.OrderService.repository.UserRepository;
import org.aspectj.weaver.ast.Or;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public OrderService(OrderRepository orderRepository, UserRepository userRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    public List<Order> getAllOrder() {
        return orderRepository.findAll();
    }

    public Order createOrder(Long userId, Long productId, Integer quantity) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("Can't Find User"));
        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Can't Find Product"));

        Order order = Order
                .builder()
                .user(user)
                .product(product)
                .quantity(quantity)
                .build();

        return orderRepository.save(order);
    }
    public Order updateProduct(Long id, Order updatedProduct) {
        return orderRepository.findById(id).map(order -> {
            order.setProduct(updatedProduct.getProduct());
            order.setUser(updatedProduct.getUser());
            order.setProduct(updatedProduct.getProduct());
            order.setQuantity(updatedProduct.getQuantity());
            return order;
        }).orElseThrow(() -> new RuntimeException("Can't Fina Order"));
    }
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    public Order getOrder(Long id) {
        return orderRepository.findById(id).orElseThrow(() -> new RuntimeException("Order Can't Find"));
    }
}
