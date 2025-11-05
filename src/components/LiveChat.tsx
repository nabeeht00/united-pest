import React, { useState, useRef, useEffect } from 'react';
import { X, Send, User, Phone } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  isAgent: boolean;
  timestamp: Date;
  sender: string;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! I'm Emily from United Pest. How can I help you with your pest control needs today?",
      isAgent: true,
      timestamp: new Date(),
      sender: 'Emily - Support Agent'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const agentResponses = [
    "I understand your concern. Let me help you with that pest issue. Can you tell me more about what type of pests you're seeing?",
    "That sounds like a common problem in Singapore. We have effective treatments for that. Would you like me to schedule a free inspection?",
    "Our technicians are experienced with that type of infestation. We can typically resolve it within 1-2 treatments. When would be a good time for us to visit?",
    "For that type of pest problem, I'd recommend our comprehensive treatment program. Let me connect you with one of our specialists who can provide a detailed quote.",
    "We offer 24/7 emergency service for urgent pest issues. Would you like me to arrange for a technician to visit today?",
    "That's definitely something we can help with. Our eco-friendly treatments are safe for families and pets. Can I get your contact details to schedule a consultation?"
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: inputText,
      isAgent: false,
      timestamp: new Date(),
      sender: 'You'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate agent typing and response
    setTimeout(() => {
      setIsTyping(false);
      const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)];
      const agentMessage: ChatMessage = {
        id: messages.length + 2,
        text: randomResponse,
        isAgent: true,
        timestamp: new Date(),
        sender: 'Emily - Support Agent'
      };
      setMessages(prev => [...prev, agentMessage]);
    }, 2000);
  };

  const handleQuickAction = (action: string) => {
    if (action === 'call') {
      window.location.href = 'tel:+6592222278';
    } else if (action === 'whatsapp') {
      window.open('https://wa.me/6592222278', '_blank');
    } else if (action === 'emergency') {
      window.location.href = 'tel:+6592222278';
    }
  };

  return (
    <>
      {/* Chat Toggle Button - Using United Pest Logo */}
      <div className="fixed top-24 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group relative border border-gray-200"
          title="Live Chat Support"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <>
              <img
                src="/10694412_797512036962044_1570787189881874716_o copy.jpg"
                alt="United Pest Live Chat"
                className="w-6 h-6 rounded-full object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </>
          )}
        </button>
      </div>

      {/* Chat Window - Positioned below the button at top right */}
      {isOpen && (
        <div className="fixed top-40 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-40 max-h-96 flex flex-col">
          {/* Header with United Pest Branding */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src="/10694412_797512036962044_1570787189881874716_o copy.jpg"
                  alt="United Pest"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <h3 className="font-semibold">Live Chat Support</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <p className="text-xs text-orange-100">Emily is online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-64">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isAgent ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs ${message.isAgent ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center overflow-hidden ${message.isAgent ? 'bg-orange-100' : 'bg-gray-100'}`}>
                    {message.isAgent ? (
                      <img
                        src="/10694412_797512036962044_1570787189881874716_o copy.jpg"
                        alt="Agent"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-3 h-3 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <div className={`p-3 rounded-lg ${message.isAgent ? 'bg-gray-100 text-gray-800' : 'bg-orange-500 text-white'}`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-xs">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/10694412_797512036962044_1570787189881874716_o copy.jpg"
                      alt="Agent typing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleQuickAction('call')}
                className="bg-green-500 hover:bg-green-600 text-white text-xs py-2 px-2 rounded-lg transition-colors flex items-center justify-center"
              >
                <Phone className="w-3 h-3 mr-1" />
                Call
              </button>
              <button
                onClick={() => handleQuickAction('whatsapp')}
                className="bg-green-600 hover:bg-green-700 text-white text-xs py-2 px-2 rounded-lg transition-colors flex items-center justify-center"
              >
                <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                </svg>
                WhatsApp
              </button>
              <button
                onClick={() => handleQuickAction('emergency')}
                className="bg-red-500 hover:bg-red-600 text-white text-xs py-2 px-2 rounded-lg transition-colors"
              >
                Emergency
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;