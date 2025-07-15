import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const whatsappNumber = "917339443310"; // Udhaya's number
  const message = "Hello! I found your portfolio and I'm interested in connecting with you.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <Button
        size="lg"
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group"
        asChild
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center"
        >
          <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        </a>
      </Button>
    </div>
  );
};