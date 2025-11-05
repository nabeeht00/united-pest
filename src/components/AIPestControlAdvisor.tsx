import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Zap, Brain, MessageSquare, Phone, MessageCircle, CheckCircle, AlertTriangle, Info, Camera, Upload } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  type?: 'normal' | 'urgent' | 'info';
}

interface PestInfo {
  name: string;
  urgency: 'low' | 'medium' | 'high';
  description: string;
  symptoms: string[];
  treatment: string;
  prevention: string[];
}

const AIPestControlAdvisor = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "🤖 Hello! I'm your AI Pest Control Advisor. I can help identify pest problems, provide expert advice, and connect you directly to our professional team. What pest issue are you facing today?",
      isBot: true,
      timestamp: new Date(),
      type: 'info'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const pestDatabase: { [key: string]: PestInfo } = {
    'ant': {
      name: 'Ants',
      urgency: 'medium',
      description: 'Ants are social insects that can quickly establish large colonies in your property.',
      symptoms: ['Trails of ants', 'Small piles of dirt', 'Sweet food contamination', 'Tiny holes in walls'],
      treatment: 'Professional gel baiting and colony elimination',
      prevention: ['Seal entry points', 'Remove food sources', 'Fix moisture issues', 'Regular cleaning']
    },
    'cockroach': {
      name: 'Cockroaches',
      urgency: 'high',
      description: 'Cockroaches are disease-carrying pests that multiply rapidly and contaminate food.',
      symptoms: ['Dark droppings', 'Musty odor', 'Egg cases', 'Grease marks', 'Live insects at night'],
      treatment: 'Gel baiting system with residual spraying',
      prevention: ['Eliminate water sources', 'Seal cracks', 'Proper food storage', 'Regular sanitation']
    },
    'rodent': {
      name: 'Rodents (Rats & Mice)',
      urgency: 'high',
      description: 'Rodents can cause structural damage and spread diseases through contamination.',
      symptoms: ['Droppings', 'Gnaw marks', 'Scratching sounds', 'Grease marks along walls', 'Nests'],
      treatment: 'Strategic trapping and baiting with entry point sealing',
      prevention: ['Seal holes', 'Remove food sources', 'Eliminate nesting sites', 'Regular inspection']
    },
    'termite': {
      name: 'Termites',
      urgency: 'high',
      description: 'Termites cause serious structural damage by eating wood from the inside out.',
      symptoms: ['Mud tubes', 'Hollow wood sounds', 'Discarded wings', 'Sagging floors', 'Tight doors/windows'],
      treatment: 'Comprehensive soil treatment and baiting systems',
      prevention: ['Reduce moisture', 'Remove wood contact with soil', 'Regular inspections', 'Proper ventilation']
    },
    'mosquito': {
      name: 'Mosquitoes',
      urgency: 'medium',
      description: 'Mosquitoes are disease vectors that breed in standing water.',
      symptoms: ['Buzzing sounds', 'Bite marks', 'Standing water', 'Increased activity at dusk'],
      treatment: 'Breeding site elimination and fogging services',
      prevention: ['Remove standing water', 'Use screens', 'Maintain gutters', 'Larvicide treatment']
    },
    'bed bug': {
      name: 'Bed Bugs',
      urgency: 'high',
      description: 'Bed bugs are blood-feeding insects that hide in mattresses and furniture.',
      symptoms: ['Bite marks in lines', 'Blood stains on sheets', 'Dark spots on mattress', 'Sweet musty odor'],
      treatment: 'Heat treatment or specialized chemical applications',
      prevention: ['Regular inspection', 'Vacuum frequently', 'Wash bedding in hot water', 'Seal cracks']
    },
    'snake': {
      name: 'Snakes',
      urgency: 'high',
      description: 'Snake encounters require immediate professional attention for safety.',
      symptoms: ['Snake sightings', 'Shed skins', 'Unusual pet behavior', 'Tracks in dust'],
      treatment: 'Emergency professional removal by trained specialists',
      prevention: ['Remove hiding spots', 'Control rodent population', 'Seal entry points', 'Maintain yard']
    }
  };

  const quickQuestions = [
    "I see ants in my kitchen",
    "There are cockroaches in my bathroom",
    "I heard scratching sounds in the walls",
    "I found termite damage",
    "There are mosquitoes in my garden",
    "I have bed bug bites",
    "I saw a snake in my yard"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const identifyPest = (input: string): PestInfo | null => {
    const lowerInput = input.toLowerCase();
    for (const [key, pest] of Object.entries(pestDatabase)) {
      if (lowerInput.includes(key) || lowerInput.includes(pest.name.toLowerCase())) {
        return pest;
      }
    }
    return null;
  };

  const generateResponse = (input: string): { text: string; type: 'normal' | 'urgent' | 'info' } => {
    const pest = identifyPest(input);
    
    if (pest) {
      const urgencyIcon = pest.urgency === 'high' ? '🚨' : pest.urgency === 'medium' ? '⚠️' : 'ℹ️';
      const response = `${urgencyIcon} **${pest.name} Identified**

${pest.description}

**Common Signs:**
${pest.symptoms.map(symptom => `• ${symptom}`).join('\n')}

**Recommended Treatment:**
${pest.treatment}

**Prevention Tips:**
${pest.prevention.map(tip => `• ${tip}`).join('\n')}

${pest.urgency === 'high' ? '🚨 **This requires immediate professional attention!**' : ''}

Would you like me to connect you with our expert team for immediate assistance?`;

      return {
        text: response,
        type: pest.urgency === 'high' ? 'urgent' : 'info'
      };
    }

    // General responses for non-specific queries
    const generalResponses = [
      {
        text: "I can help identify your pest problem! Could you describe what you're seeing? For example:\n• What does the pest look like?\n• Where are you finding them?\n• Any damage or signs you've noticed?\n• When do you see them most?",
        type: 'info' as const
      },
      {
        text: "Based on your description, I'd recommend a professional inspection to properly identify the pest and determine the best treatment approach. Our experts can provide a free assessment and customized solution.",
        type: 'normal' as const
      }
    ];

    return generalResponses[Math.floor(Math.random() * generalResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(inputText);
      const botMessage: ChatMessage = {
        id: messages.length + 2,
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        type: response.type
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      // Auto-suggest contact for urgent cases
      if (response.type === 'urgent') {
        setTimeout(() => {
          const contactMessage: ChatMessage = {
            id: messages.length + 3,
            text: "🔥 **Immediate Action Required!** \n\nThis pest issue needs urgent professional attention. Click below to contact our emergency response team:",
            isBot: true,
            timestamp: new Date(),
            type: 'urgent'
          };
          setMessages(prev => [...prev, contactMessage]);
        }, 2000);
      }
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleContact = (method: string) => {
    if (method === 'whatsapp') {
      const message = "Hi! I need help with a pest control issue. I was chatting with your AI advisor and need professional assistance.";
      window.open(`https://wa.me/6592222278?text=${encodeURIComponent(message)}`, '_blank');
    } else if (method === 'call') {
      window.location.href = 'tel:+6566989118';
    } else if (method === 'emergency') {
      window.location.href = 'tel:+6592222278';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">AI-Powered Assistance</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI Pest Control Advisor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant expert advice on pest identification, treatment options, and prevention tips. 
            Our AI advisor is trained on years of pest control expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Pest Expert</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-blue-100">Online & Ready to Help</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isBot ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      {message.isBot ? <Bot className="w-4 h-4 text-blue-600" /> : <User className="w-4 h-4 text-gray-600" />}
                    </div>
                    <div>
                      <div className={`p-4 rounded-2xl ${
                        message.isBot 
                          ? message.type === 'urgent' 
                            ? 'bg-red-50 border border-red-200 text-red-800'
                            : message.type === 'info'
                            ? 'bg-blue-50 border border-blue-200 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                          : 'bg-blue-600 text-white'
                      }`}>
                        <div className="text-sm whitespace-pre-line">
                          {message.text.split('**').map((part, index) => 
                            index % 2 === 1 ? <strong key={index}>{part}</strong> : part
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 px-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-xs">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-2xl">
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

            {/* Quick Questions */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-600 mb-3">Quick questions to get started:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.slice(0, 4).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Actions */}
            <div className="px-6 py-4 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleContact('call')}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={() => handleContact('whatsapp')}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => handleContact('emergency')}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Emergency</span>
                </button>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Describe your pest problem..."
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isTyping || !inputText.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl transition-colors flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Brain,
                title: 'AI-Powered Identification',
                description: 'Advanced pest identification using machine learning and expert knowledge.'
              },
              {
                icon: Zap,
                title: 'Instant Expert Advice',
                description: 'Get immediate recommendations for treatment and prevention strategies.'
              },
              {
                icon: MessageSquare,
                title: 'Direct Professional Connection',
                description: 'Seamlessly connect with our certified pest control experts when needed.'
              }
            ].map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4">
                    <FeatureIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPestControlAdvisor;