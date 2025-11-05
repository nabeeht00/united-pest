import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIPestAdvisor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI Pest Advisor. What pest issue are you facing today? I can help identify the problem and connect you directly to our WhatsApp for immediate assistance.",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const pestResponses: { [key: string]: string } = {
    'ant': 'For ant problems, we recommend our targeted ant control service. Our team uses specialized baiting systems that eliminate entire colonies.',
    'cockroach': 'Cockroach infestations require professional treatment. We use gel baiting and residual spraying for complete elimination.',
    'termite': 'Termites can cause serious structural damage. We offer comprehensive termite inspections and treatment programs. This requires urgent attention!',
    'rodent': 'Rat and mice control requires strategic placement of traps and baits. Our rodent management program includes sealing entry points.',
    'mosquito': 'Mosquito control involves treating breeding sites and adult populations. We offer fogging services and larvicide treatments.',
    'bed bug': 'Bed bugs require specialized heat treatment or chemical applications. This is a complex issue that needs professional handling.',
    'snake': 'Snake removal requires trained professionals for safety. We provide immediate snake removal services. This is an emergency situation!',
    'bird': 'Bird control involves humane deterrent systems and netting solutions. We can assess your property and recommend the best approach.',
    'flea': 'Flea infestations affect both pets and humans. We provide comprehensive flea treatment for homes and surrounding areas.',
    'wasp': 'Wasp nest removal requires protective equipment and expertise. For safety, this should be handled by professionals immediately.'
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Check for pest keywords and create WhatsApp message
    const lowerInput = inputText.toLowerCase();
    let pestType = '';
    let botResponse = "I understand your concern. Let me connect you directly to our WhatsApp for immediate professional assistance.";

    for (const [pest, response] of Object.entries(pestResponses)) {
      if (lowerInput.includes(pest)) {
        pestType = pest;
        botResponse = response + " Let me connect you to our WhatsApp for immediate assistance.";
        break;
      }
    }

    // Create WhatsApp message with user's pest problem
    const whatsappMessage = `Hi! I need help with a ${pestType || 'pest'} problem. Details: ${inputText}`;
    const whatsappUrl = `https://wa.me/6592222278?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

      // Auto-redirect to WhatsApp after bot response
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        
        // Add final message
        const finalMessage: Message = {
          id: messages.length + 3,
          text: "I've opened WhatsApp for you with your pest problem details. Our team will respond immediately!",
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, finalMessage]);
      }, 1500);
    }, 1000);

    setInputText('');
  };

  const handleQuickAction = (action: string) => {
    if (action === 'whatsapp') {
      const message = "Hi! I need help with a pest control issue. Can you assist me?";
      window.open(`https://wa.me/6592222278?text=${encodeURIComponent(message)}`, '_blank');
    } else if (action === 'call') {
      window.location.href = 'tel:+6566989118';
    }
  };

  // Return null to completely hide the component
  return null;
};

export default AIPestAdvisor;