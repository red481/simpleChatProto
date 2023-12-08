import React, { useState, useEffect } from 'react';

const Chat = () => {
  
  const [messageType, setMessageType] = useState('ENTER');
  const [chatRoomId, setChatRoomId] = useState(100);
  const [sender, setSender] = useState(3609);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [ws, setWs] = useState<WebSocket>();

    useEffect(() => {
      const webSocket = new WebSocket('ws://localhost:8080/ws/chat');

      webSocket.onopen = () => {
        console.log('Connected to the server');
      };
  
      webSocket.onerror = (error) => {
        console.error('WebSocket Error:', error);
        // 에러 처리 로직
      };
  
      setWs(webSocket);
  
      return () => {
        if (webSocket) {
          webSocket.close();
        }
      };  
    }, []);

  useEffect(()=>{
    if(ws){
      // 서버로부터 메시지를 받을 때 호출될 함수
      ws.onmessage = (event) => {
        try {
          const messageDto = JSON.parse(event.data);
          setMessageType(messageDto.messageType);
          setChatRoomId(messageDto.chatRoomId);
          setSender(messageDto.sender);
          setMessages(prevMessages => [...prevMessages, messageDto.message]);
      } catch (e) {
          console.error('The message is not in JSON format:', event.data);
      }
      };
  
    }
  },[ws]);

  const handleNewMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (ws) {
      ws.send(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <textarea className='textarea' value={newMessage} onChange={handleNewMessageChange} />
      <button className='textareaButton' onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;