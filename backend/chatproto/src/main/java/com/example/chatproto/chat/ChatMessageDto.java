package com.example.chatproto.chat;


import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ChatMessageDto {

    public enum MessageType {
        ENTER, TALK
    }

    private MessageType messageType;
    private Long chatRoomId;
    private Long sender;
    private String message;
}

//{
//    "messageType": "ENTER",
//    "chatRoomId": 100,
//    "sender": 3609,
//    "message": "안녕하세요"}