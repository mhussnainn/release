export type Service = {
  name: string;
  category: "Massage" | "Energy" | "Coaching";
  duration?: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "Therapeutic Massage",
    category: "Massage",
    duration: "60 / 90 min",
    description:
      "Targeted fascia release and neuromuscular work for chronic pain, injury recovery, and long-held tension.",
  },
  {
    name: "Deep Tissue Massage",
    category: "Massage",
    duration: "60 / 90 min",
    description:
      "Slow, sustained pressure into the deeper layers of muscle and connective tissue to break up adhesions.",
  },
  {
    name: "Swedish Massage",
    category: "Massage",
    duration: "60 / 90 min",
    description:
      "Long, flowing strokes designed for full-body relaxation, improved circulation, and a soft nervous-system reset.",
  },
  {
    name: "Cupping",
    category: "Massage",
    duration: "Add-on",
    description:
      "Gentle suction lifts the fascia to release deep tension, increase circulation, and accelerate recovery.",
  },
  {
    name: "Access Bars Session",
    category: "Energy",
    description:
      "Light touch on 32 points of the head to clear mental blocks, reduce overthinking, and invite spaciousness.",
  },
  {
    name: "Reiki",
    category: "Energy",
    description:
      "Channeled energy work that softens the nervous system and supports physical and emotional balance.",
  },
  {
    name: "Sound Bowls",
    category: "Energy",
    description:
      "Resonant tones from singing bowls guide the body into a meditative, parasympathetic state.",
  },
  {
    name: "Tuning Forks",
    category: "Energy",
    description:
      "Calibrated vibrations applied to the body to harmonize energetic frequency and ease tension.",
  },
  {
    name: "Energy Session",
    category: "Energy",
    description:
      "An intuitive blend of energetic modalities tailored to where the body is asking for support.",
  },
  {
    name: "EMR Emotional Release",
    category: "Coaching",
    description:
      "Somatic practice for moving stored emotion through the body, gently and without re-traumatizing.",
  },
  {
    name: "Energetic Counseling",
    category: "Coaching",
    description:
      "Conversation paired with energetic awareness to untangle patterns and find a clearer path forward.",
  },
  {
    name: "Life Coaching",
    category: "Coaching",
    description:
      "Grounded, holistic guidance for transitions, decisions, and the long arc of becoming yourself.",
  },
  {
    name: "Mindset Coaching Session",
    category: "Coaching",
    description:
      "Reframe limiting beliefs and build mental practices that support the life you're actually living.",
  },
];

export const reviews = [
  {
    name: "Lacey",
    quote:
      "Renee is amazing!! I have had bad pain for years and then I found her. She has been so wonderful and very knowledgeable about the body. I was relieved when our paths crossed to find someone with such a big heart and who truly cares.",
    label: "Therapeutic Client",
  },
  {
    name: "Nina Kropp",
    quote:
      "I've been getting massages for over 35 years and I've never had a massage this incredible! I have severe arthritis in my lower back from an injury that's 14 years old — I was supposed to have surgery and she has eased that pain immensely.",
    label: "Therapeutic Massage",
  },
  {
    name: "Kristina Steward",
    quote:
      "I've been working with Renee and her therapeutic massage. I have never felt better! I encourage anyone that wants an amazing holistic experience to go see Renee. She's AMAZING!",
    label: "Holistic Care",
  },
];
