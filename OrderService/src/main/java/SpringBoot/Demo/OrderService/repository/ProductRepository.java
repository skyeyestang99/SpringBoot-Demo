package SpringBoot.Demo.OrderService.repository;

import SpringBoot.Demo.OrderService.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
