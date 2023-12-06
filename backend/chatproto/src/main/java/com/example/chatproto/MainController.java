package com.example.chatproto;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class MainController {

    @RequestMapping("/hello")
    public String hello() {
        return "Hello World!";
    }
}
