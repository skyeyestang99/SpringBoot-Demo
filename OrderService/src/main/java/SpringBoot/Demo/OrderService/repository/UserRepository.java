package SpringBoot.Demo.OrderService.repository;

import SpringBoot.Demo.OrderService.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
