import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
}

const QUICK_PROMPTS = [
  "I need help finding a medicine",
  "Talk to a pharmacist",
  "Mental health support",
  "Oncology medication sourcing",
];

const WHATSAPP = "https://wa.me/2347083725382";

function getEnoreResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes("medicine") || lower.includes("drug") || lower.includes("medication")) {
    return "I can help you find the right medicine! You can browse our pharmacy shop, or I can connect you directly with a pharmacist who will guide you. Would you like to visit our shop or chat with a pharmacist on WhatsApp?";
  }
  if (lower.includes("pharmacist") || lower.includes("talk") || lower.includes("speak")) {
    return `Absolutely! Our pharmacists are available for private, confidential consultations. You can reach one directly on WhatsApp — just tap here: ${WHATSAPP} — or book a scheduled consultation through our booking page.`;
  }
  if (lower.includes("mental health") || lower.includes("anxiety") || lower.includes("depression") || lower.includes("stress")) {
    return "Mental health matters deeply to us. PocketPill offers accessible mental health support — from medication guidance to connecting you with the right professionals. Everything is handled privately and with care. Would you like to speak to a pharmacist about mental health support?";
  }
  if (lower.includes("oncology") || lower.includes("cancer") || lower.includes("chemo")) {
    return "PocketPill provides expert oncology medication sourcing across Nigeria. We help with finding, verifying, and delivering cancer treatment medications. Our team can guide you through availability, pricing, and safe handling. Would you like to connect with our oncology support team?";
  }
  if (lower.includes("delivery") || lower.includes("deliver") || lower.includes("shipping")) {
    return "We deliver discreetly across Nigeria! Delivery availability and timing depend on your area and order. Our team can confirm the details before you pay. Would you like to place an order?";
  }
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much")) {
    return "Our pricing depends on the service — consultations start at affordable rates, and medicine prices vary. You can check our pricing page or chat with a pharmacist for specific costs. No surprises, no hidden fees.";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey") || lower.includes("good")) {
    return "Hello! 👋 I'm Enoré, PocketPill's health assistant. I can help you find medicines, connect with a pharmacist, or answer questions about our mental health and oncology services. What do you need today?";
  }
  if (lower.includes("thank")) {
    return "You're welcome! If you need anything else, I'm right here. Take care of yourself! 💚";
  }

  return "I'd love to help with that! For the most accurate guidance, I'd recommend connecting directly with one of our licensed pharmacists. You can reach them on WhatsApp or book a private consultation. Is there anything specific I can help clarify?";
}

export function EnoreChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greeting",
      role: "assistant",
      content:
        "Hi! I'm Enoré, PocketPill's health assistant. 💚\n\nI can help you find medicines, connect with a pharmacist, or answer questions about our mental health and oncology services. How can I help?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate a brief typing delay
    setTimeout(() => {
      const response = getEnoreResponse(messageText);
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: response,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    }, 600);
  };

  return (
    <>
      {/* Chat Panel */}
      <div className={`enore-panel ${isOpen ? "enore-panel--open" : ""}`}>
        <div className="enore-panel__header">
          <div className="enore-panel__header-info">
            <div className="enore-panel__avatar">
              <img src="/pocketpill-icon-512.png" alt="" className="enore-panel__avatar-img" />
            </div>
            <div>
              <h3 className="enore-panel__name">Enoré</h3>
              <p className="enore-panel__status">PocketPill Health Assistant</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="enore-panel__close"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="enore-panel__messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`enore-msg ${msg.role === "user" ? "enore-msg--user" : "enore-msg--assistant"}`}
            >
              {msg.content.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < msg.content.split("\n").length - 1 && <br />}
                </span>
              ))}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {messages.length <= 1 && (
          <div className="enore-panel__prompts">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                className="enore-prompt"
                onClick={() => handleSend(prompt)}
              >
                {prompt} <ChevronRight className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
        )}

        <form
          className="enore-panel__input"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Enoré anything..."
            className="enore-input"
          />
          <button
            type="submit"
            className="enore-send"
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>

      {/* Floating Action Button */}
      <button
        className={`enore-fab ${isOpen ? "enore-fab--hidden" : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Chat with Enoré"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="enore-fab__label">Chat with Enoré</span>
      </button>
    </>
  );
}
