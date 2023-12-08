package com.example.chatproto;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class MainController {

    @PostMapping("/chat")
    public String hello() {
        return "Hello World!";
    }
}
