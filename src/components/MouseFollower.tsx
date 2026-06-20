import React, { useState, useEffect, useRef } from 'react';
import { 
  Mouse, MessageSquareCode, Send, RefreshCw, X, 
  ChevronDown, Sparkles, Bot, User, Calendar, Cpu, Layers, HelpCircle
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const MouseFollower: React.FC = () => {
  // Global cursor states for the movable orange mouse follow light
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
  const [isCurrentlyMoving, setIsCurrentlyMoving] = useState(false);
  const [isGlobalCursorEnabled, setIsGlobalCursorEnabled] = useState(true);

  // References for tracking velocity & coordinates of mouse
  const lastMousePos = useRef({ x: 0, y: 0, time: Date.now() });
  const moveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // AI Chat states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! I am Abegail's AI Representative. I can walk you through her workflow automations, CRM pipelines, previous consulting projects, or help you book a discovery call. Ask me anything!",
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat automatically when messages update or chat opens/closes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isChatOpen]);

  // Global mouse cursor tracker for the orange light follow style
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const now = Date.now();
      const dt = now - lastMousePos.current.time;
      if (dt > 10) {
        lastMousePos.current = { x: e.clientX, y: e.clientY, time: now };
      }

      setIsCurrentlyMoving(true);

      // Debounce to restore static aura
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      moveTimeoutRef.current = setTimeout(() => {
        setIsCurrentlyMoving(false);
      }, 120);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
    };
  }, []);

  // Smooth lagging follower loop
  useEffect(() => {
    let animationFrameId: number;
    
    const updateFollower = () => {
      setFollowerPosition((prev) => {
        const easingFactor = 0.16; // Elastic trailing coefficient
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        
        return {
          x: prev.x + dx * easingFactor,
          y: prev.y + dy * easingFactor,
        };
      });
      
      animationFrameId = requestAnimationFrame(updateFollower);
    };

    animationFrameId = requestAnimationFrame(updateFollower);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  // Submit chat message to the server-side API
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || chatInput).trim();
    if (!text) return;

    if (!textToSend) {
      setChatInput('');
    }

    const userMsgId = 'msg-' + Date.now() + '-user';
    const newUserMessage: ChatMessage = {
      id: userMsgId,
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsGenerating(true);

    try {
      // Gather history
      const formattedHistory = [...messages, newUserMessage].map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Call Express proxy server
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: formattedHistory })
      });

      if (!response.ok) {
        throw new Error('Failed to retrieve response from AI Server');
      }

      const data = await response.json();
      const assistantMessage: ChatMessage = {
        id: 'msg-' + Date.now() + '-assistant',
        role: 'assistant',
        content: data.text || "I was unable to formulate a response. Let's try again shortly!",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error(err);
      const errorMessage: ChatMessage = {
        id: 'msg-' + Date.now() + '-error',
        role: 'assistant',
        content: "Oops! I encountered an error connecting to my AI module. Don't worry, you can always write to Abegail directly using the Contact Form or schedule a call above!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const PRESET_PROMPTS = [
    { label: "What are her core automations?", text: "What are Abegail's core automation services and tools?" },
    { label: "Show previous agency projects", text: "Can you detail some of her previous projects and work examples?" },
    { label: "How can I book a call?", text: "I want to schedule a consult with Abegail. How does the hiring process work?" }
  ];

  const handleClearHistory = () => {
    if (window.confirm("Would you like to clear the chat conversation history?")) {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content: "Chat cleared! I am Abegail's AI Representative. Let me know what you would like to automate today.",
          timestamp: new Date()
        }
      ]);
    }
  };

  return (
    <>
      {/* 1. MOVABLE MOUSE GRAPHICAL LIGHT FOLLOWER (Orange trails as requested!) */}
      {isGlobalCursorEnabled && (
        <div
          className="fixed pointer-events-none z-50 transition-transform duration-75 mix-blend-screen hidden md:block"
          style={{
            transform: `translate3d(${followerPosition.x - 24}px, ${followerPosition.y - 24}px, 0)`,
            transition: 'opacity 0.25s ease-out'
          }}
        >
          {/* Inner Light Core (Changes orange on move, blue/purple on standby) */}
          <div className={`absolute left-[18px] top-[18px] w-3 h-3 rounded-full transition-all duration-300 ${
            isCurrentlyMoving 
              ? 'bg-brand-accent scale-125 shadow-[0_0_12px_#f97316]' 
              : 'bg-indigo-400 scale-90 shadow-[0_0_6px_#818cf8]'
          }`} />

          {/* Glowing Light Outer Ring Halo (Dynamic Orange Light on mouse movement!) */}
          <div 
            className="w-12 h-12 rounded-full border border-dashed transition-all duration-300 ease-out flex items-center justify-center"
            style={{
              borderColor: isCurrentlyMoving ? 'rgba(249, 115, 22, 0.7)' : 'rgba(129, 140, 248, 0.25)',
              transform: isCurrentlyMoving 
                ? 'scale(1.2) rotate(180deg)' 
                : 'scale(0.8) rotate(0deg)',
              background: isCurrentlyMoving 
                ? 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)' 
                : 'radial-gradient(circle, rgba(129, 140, 248, 0.04) 0%, transparent 60%)',
              transitionDuration: '250ms'
            }}
          >
            {/* Tiny vector orientation indicators */}
            <div className={`w-1 h-1 rounded-full absolute top-0 ${isCurrentlyMoving ? 'bg-brand-accent' : 'bg-transparent'}`} />
            <div className={`w-1 h-1 rounded-full absolute bottom-0 ${isCurrentlyMoving ? 'bg-brand-accent' : 'bg-transparent'}`} />
          </div>
        </div>
      )}

      {/* 2. FLOATING PROFESSIONAL AI ASSISTANT CHAT MODULE */}
      <div className="fixed bottom-6 right-6 z-40 select-none flex flex-col items-end">
        
        {/* Chat window with modern, elegant design */}
        {isChatOpen ? (
          <div 
            id="ai-representative-chat-window"
            className="bg-[#0b1326]/95 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col w-85 sm:w-[380px] h-[550px] max-h-[85vh] mb-4 text-sm font-sans relative backdrop-blur-md animate-slideUp"
          >
            {/* Elegant Header */}
            <div className="bg-[#0e1a33] border-b border-white/15 p-4 flex items-center justify-between shrink-0 relative">
              <div className="flex items-center space-x-3 text-white">
                
                {/* Professional Headshot Avatar of Abegail */}
                <div className="relative h-10 w-10 bg-slate-900 rounded-full border border-brand-accent/40 flex items-center justify-center overflow-hidden shrink-0 shadow-md">
                  <img
                    src="https://res.cloudinary.com/dwwqbsiom/image/upload/f_auto,q_auto/Image_156_vxpdi6"
                    alt="Abegail S."
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover scale-105"
                  />
                  {/* Subtle Online Dot */}
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-[#0e1a33]" />
                </div>
 
                <div className="text-left">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-sm tracking-tight text-white">Abegail's AI Assistant</span>
                  </div>
                  <div className="flex items-center space-x-1 text-emerald-400 text-[10px] font-sans mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span>Typically replies instantly</span>
                  </div>
                </div>
              </div>

              {/* Functional header buttons */}
              <div className="flex items-center space-x-1.5 z-10">
                <button 
                  onClick={handleClearHistory}
                  title="Reset Conversation"
                  className="text-gray-400 hover:text-brand-accent transition-colors p-1.5 hover:bg-white/5 rounded-full border border-white/5 hover:border-brand-accent/20 cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  title="Close Chat"
                  className="text-gray-400 hover:text-red-400 transition-colors p-1.5 hover:bg-white/5 rounded-full border border-white/5 hover:border-red-500/20 cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Main Conversation Log Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#0b1326] to-[#080d1a] scrollbar-thin scrollbar-thumb-white/5">
              
              {/* Profile Card Header Greeting */}
              <div className="bg-[#121f3d] border border-white/5 rounded-xl p-3.5 relative overflow-hidden shadow-sm">
                <p className="text-xs text-gray-300 leading-relaxed text-left">
                  <span className="text-brand-accent font-bold block mb-1">
                    Welcome!
                  </span>
                  I am Abegail's AI Specialist Agent. I can provide insights on her workflows, integrations, previous portfolio cases, or guide you to lock in a consultation. Ask me something below!
                </p>
              </div>

              {/* Chat turns iteration */}
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div 
                    key={msg.id} 
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[85%] ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      
                      {/* Avatar decoration */}
                      {!isUser ? (
                        <div className="h-7 w-7 rounded-full overflow-hidden border border-brand-accent/30 bg-slate-900 shrink-0 shadow-sm mt-0.5">
                          <img
                            src="https://res.cloudinary.com/dwwqbsiom/image/upload/f_auto,q_auto/Image_156_vxpdi6"
                            alt="Abegail Avatar"
                            className="h-full w-full object-cover scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        <div className="h-7 w-7 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-[10px] shrink-0 border border-white/10 mt-0.5 uppercase shadow-sm">
                          Yo
                        </div>
                      )}

                      {/* Msg Speech Bubble */}
                      <div className={`p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-line text-left shadow-sm ${
                        isUser 
                          ? 'bg-brand-accent text-slate-950 rounded-tr-none font-medium' 
                          : 'bg-[#182747] border border-white/5 text-gray-100 rounded-tl-none font-normal'
                      }`}>
                        {msg.content}
                      </div>

                    </div>
                  </div>
                );
              })}

              {/* Interactive Loading / Thinking */}
              {isGenerating && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2 max-w-[85%]">
                    <div className="h-7 w-7 rounded-full overflow-hidden border border-brand-accent/20 bg-slate-900 shrink-0 shadow-sm">
                      <img
                        src="https://res.cloudinary.com/dwwqbsiom/image/upload/f_auto,q_auto/Image_156_vxpdi6"
                        alt="Thinking..."
                        className="h-full w-full object-cover animate-pulse"
                      />
                    </div>
                    
                    <div className="bg-[#182747] border border-white/5 px-4 py-2.5 rounded-2xl rounded-tl-none flex items-center space-x-1.5 shadow-sm">
                      <span className="text-[10px] text-gray-400 font-sans tracking-tight">AI is typing</span>
                      <div className="flex space-x-1">
                        <span className="w-1 h-1 bg-brand-accent rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-1 h-1 bg-brand-accent rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-1 h-1 bg-brand-accent rounded-full animate-bounce"></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Prompt presets FAQ Pills */}
            <div className="px-4 py-2 bg-[#080d1a] border-t border-white/5 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto shrink-0 py-2.5">
              {PRESET_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt.text)}
                  disabled={isGenerating}
                  className="bg-[#121f3d] border border-white/10 hover:border-brand-accent/40 text-gray-300 hover:text-white rounded-full px-3 py-1.5 text-[10px] font-sans tracking-wide transition-all duration-150 cursor-pointer disabled:opacity-40 text-left outline-none shrink-0"
                >
                  {prompt.label}
                </button>
              ))}
            </div>

            {/* Input message bar */}
            <div className="p-3 border-t border-white/10 bg-[#0e1a33] flex items-center space-x-2 shrink-0">
              <div className="flex-1 bg-[#060b17] border border-white/10 rounded-full px-3.5 py-2 flex items-center space-x-1.5 focus-within:border-brand-accent/40 transition-colors">
                <input 
                  type="text"
                  placeholder="Ask a question..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  disabled={isGenerating}
                  className="w-full bg-transparent border-none text-white focus:outline-none text-xs placeholder:text-gray-500 disabled:opacity-50"
                />
              </div>

              <button
                onClick={() => handleSendMessage()}
                disabled={!chatInput.trim() || isGenerating}
                className="bg-brand-accent text-slate-950 p-2.5 rounded-full transition-all hover:bg-brand-accent/80 font-extrabold hover:scale-105 active:scale-95 disabled:opacity-40 shrink-0 cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Elegant control footer */}
            <div className="bg-[#060b17] px-4 py-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 shrink-0 font-sans">
              <span>Secure Connection Sync</span>
              <button 
                onClick={() => setIsGlobalCursorEnabled(!isGlobalCursorEnabled)}
                className="text-brand-accent hover:text-white transition-colors font-semibold"
              >
                {isGlobalCursorEnabled ? 'Toggle Pointer Glow' : 'Enable Pointer Glow'}
              </button>
            </div>

          </div>
        ) : (
          /* Sleek, simple, and professional circular floating action button with pulsing indicator */
          <button 
            onClick={() => setIsChatOpen(true)}
            className="flex items-center space-x-2 px-5 py-3 bg-brand-accent text-slate-950 shadow-xl shadow-brand-accent/15 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 rounded-full font-sans font-bold hover:scale-105 active:scale-95 relative group cursor-pointer border border-brand-accent/20"
          >
            {/* Dynamic Status pulse node */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
            </span>
            <MessageSquareCode className="h-4 w-4" />
            <span className="tracking-wide text-xs">Chat Assistant</span>
          </button>
        )}

      </div>
    </>
  );
};

export default MouseFollower;
