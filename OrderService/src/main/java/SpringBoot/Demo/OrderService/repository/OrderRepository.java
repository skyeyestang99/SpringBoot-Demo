package SpringBoot.Demo.OrderService.repository;

import SpringBoot.Demo.OrderService.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
