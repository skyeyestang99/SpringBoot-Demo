package SpringBoot.Demo.OrderService.service;

import SpringBoot.Demo.OrderService.entity.User;
import SpringBoot.Demo.OrderService.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public void createUser(User user) {
        userRepository.save(user);
    }

    public void updateUser(Long id, User updatedUser) {
        userRepository.findById(id).map(user -> {
            user.setUserName(updatedUser.getUserName());
            user.setEmail(updatedUser.getEmail());
            user.setPassword(updatedUser.getPassword());
            return userRepository.save(user);
        }).orElseThrow(() -> new RuntimeException("Updated User ID Not Found"));
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

}
