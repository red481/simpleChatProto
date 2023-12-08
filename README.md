# simpleChatProto

### 클라이언트(리액트 서버)와 서버(스프링) 간의 웹소켓 채널 생성과 소통을 목적으로 구현.
### 따라서 UI가 변경됨에 따라 코드를 수정해야 할 수 있음.
### vite + 타입스크립트라 기본적인 타입스크립트 설치되어 있어야 함

### 리액트 실행 시 npm run dev 입력

Dto:
{
    "messageType": "ENTER",
    "chatRoomId": 100,
    "sender": 3609,
    "message": "안녕하신가요?"
}

1.처음 입장 시 ENTER, 이후엔 TALK
2.메시지 입력 시 줄 띄움 입력하지 않도록 조심해야 함
