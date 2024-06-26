export default function scrollToChat() {
    const chatSection = document.getElementById('chat-window');
    console.log(chatSection);
    // chatSection.scrollIntoView({ behavior: 'smooth' });
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  }