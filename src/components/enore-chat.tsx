import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
}

const QUICK_PROMPTS = [
  "Find a medicine",
  "Cover my parent",
  "I'm abroad and they are in Nigeria",
  "Talk to a pharmacist",
];

const WHATSAPP = "https://wa.me/2347083725382";

function getEnoreResponse(input: string): string {
  const lower = input.toLowerCase();

  if (
    lower.includes("medicine") ||
    lower.includes("drug") ||
    lower.includes("medication") ||
    lower.includes("find")
  ) {
    return "I can help you find the right medicine! Head over to /find so you can attach a photo or give me the name. I don't check stock directly here.";
  }
  if (
    lower.includes("parent") ||
    lower.includes("abroad") ||
    lower.includes("lineage") ||
    lower.includes("cover")
  ) {
    return "Lineage is for a parent who will not use this website. You set it up. We call them. Want to start a parent plan? Visit /lineage to start.";
  }
  if (lower.includes("pharmacist") || lower.includes("talk") || lower.includes("speak")) {
    return `Absolutely! Our pharmacists are available for private, confidential consultations. You can reach one directly on WhatsApp. Just tap here: ${WHATSAPP}`;
  }
  if (
    lower.includes("mental health") ||
    lower.includes("anxiety") ||
    lower.includes("depression") ||
    lower.includes("stress")
  ) {
    return "Mental health matters deeply to us. We can help you find what you need. Visit /find to request sourcing, or tap the WhatsApp link to chat with a pharmacist.";
  }
  if (lower.includes("oncology") || lower.includes("cancer") || lower.includes("chemo")) {
    return "PocketPill provides expert oncology medication sourcing across Nigeria. We help with finding, verifying, and delivering cancer treatment medications. Our team can guide you through availability, pricing, and safe handling. Would you like to connect with our oncology support team?";
  }
  if (lower.includes("delivery") || lower.includes("deliver") || lower.includes("shipping")) {
    return "We deliver discreetly across Nigeria! Delivery availability and timing depend on your area and order. Our team can confirm the details before you pay. Would you like to place an order?";
  }
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much")) {
    return "Medicine prices are quoted after we see the prescription. You can chat with a pharmacist on WhatsApp for specific costs.";
  }
  if (
    lower.includes("hello") ||
    lower.includes("hi") ||
    lower.includes("hey") ||
    lower.includes("good")
  ) {
    return "Hello! 👋 I'm Enoré, PocketPill's health assistant. I can help you find medicines, connect with a pharmacist, or answer questions about our mental health and oncology services. What do you need today?";
  }
  if (lower.includes("thank")) {
    return "You're welcome! If you need anything else, I'm right here. Take care of yourself! 💚";
  }

  return "I'd love to help with that! For the most accurate guidance, I'd recommend connecting directly with one of our licensed pharmacists. You can reach them on WhatsApp. Is there anything specific I can help clarify?";
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
  const messagesRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      // Keep the mobile keyboard closed until the customer chooses to type.
      closeRef.current?.focus({ preventScroll: true });
    }
  }, [isOpen]);

  const closeChat = () => {
    setIsOpen(false);
    launcherRef.current?.focus({ preventScroll: true });
  };

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
      <div
        id="enore-chat"
        role="region"
        aria-label="Enoré chat"
        aria-hidden={!isOpen}
        inert={!isOpen}
        onKeyDown={(event) => {
          if (event.key === "Escape") closeChat();
        }}
        className={`enore-panel ${isOpen ? "enore-panel--open" : ""}`}
      >
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
            type="button"
            ref={closeRef}
            onClick={closeChat}
            className="enore-panel__close"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" aria-hidden="true" />
            <span>Close</span>
          </button>
        </div>

        <div className="enore-panel__messages" ref={messagesRef}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`enore-msg ${msg.role === "user" ? "enore-msg--user" : "enore-msg--assistant"}`}
            >
              {msg.content.split("\n").map((line, i) => (
                <span key={i}>
                  {line.split(/(https?:\/\/[^\s]+|\/[a-z/]+)/g).map((part, j) => {
                    if (part.startsWith("http"))
                      return (
                        <a
                          key={j}
                          href={part}
                          target="_blank"
                          rel="noreferrer"
                          className="underline font-medium hover:text-primary"
                        >
                          {part}
                        </a>
                      );
                    if (part.startsWith("/"))
                      return (
                        <a key={j} href={part} className="underline font-medium hover:text-primary">
                          {part}
                        </a>
                      );
                    return <span key={j}>{part}</span>;
                  })}
                  {i < msg.content.split("\n").length - 1 && <br />}
                </span>
              ))}
            </div>
          ))}
        </div>

        {messages.length <= 1 && (
          <div className="enore-panel__prompts">
            {QUICK_PROMPTS.map((prompt) => (
              <button key={prompt} className="enore-prompt" onClick={() => handleSend(prompt)}>
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
        ref={launcherRef}
        aria-controls="enore-chat"
        aria-expanded={isOpen}
        aria-label="Chat with Enoré"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="enore-fab__label">Chat with Enoré</span>
      </button>
    </>
  );
}
