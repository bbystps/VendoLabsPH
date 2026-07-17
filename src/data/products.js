export const products = [
  {
    id: 1,
    slug: "vendo-main-controller-board",
    name: "Vendo Main Controller Board",
    category: "Controller Board",
    price: 2499,
    stock: 18,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    shortDescription:
      "Main modular board for water vendo, carwash vendo, coffee vendo, and custom vendo machines.",
    description:
      "The Vendo Main Controller Board is designed as the core control module for different vending machine projects. It can support coin input, output control, timers, sensors, and future expansion modules.",
    features: [
      "Modular design for different vendo types",
      "Supports coin slot input",
      "Relay/output control ready",
      "Can be expanded with add-on boards",
      "Designed for DIY builders and vendo businesses"
    ],
    specs: {
      Input: "12V DC",
      Outputs: "Relay / Digital Output Ready",
      UseCase: "Water vendo, carwash vendo, coffee vendo, multipurpose vendo",
      Expandable: "Yes"
    }
  },
  {
    id: 2,
    slug: "multi-output-expansion-board",
    name: "Multi Output Expansion Board",
    category: "Expansion Board",
    price: 1299,
    stock: 12,
    badge: "Expandable",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=900&q=80",
    shortDescription:
      "Add more output channels for machines that need multiple control lines.",
    description:
      "Use this expansion board together with the main controller to support more output channels for pumps, solenoids, valves, lights, buzzers, or multiple machine functions.",
    features: [
      "Adds multiple control outputs",
      "Works with main controller board",
      "Useful for multi-service vendo machines",
      "Clean wiring layout",
      "Designed for future product expansion"
    ],
    specs: {
      Input: "From Main Board",
      Outputs: "Multiple Output Channels",
      UseCase: "Multiple pumps, valves, relays, and indicators",
      Expandable: "Yes"
    }
  },
  {
    id: 3,
    slug: "multi-input-expansion-board",
    name: "Multi Input Expansion Board",
    category: "Expansion Board",
    price: 1199,
    stock: 15,
    badge: "New",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=900&q=80",
    shortDescription:
      "Add more sensors, buttons, switches, or input devices to your vendo system.",
    description:
      "This board expands the input capability of your Vendo Board system. It is ideal for machines with many buttons, level sensors, coin signals, door sensors, or mode selectors.",
    features: [
      "Adds extra input channels",
      "Supports sensors and buttons",
      "Compatible with modular vendo system",
      "Ideal for custom machine features",
      "Good for prototyping and production builds"
    ],
    specs: {
      Input: "Buttons / Sensors / Switches",
      Outputs: "Data to Main Board",
      UseCase: "Water level, buttons, door sensor, mode selection",
      Expandable: "Yes"
    }
  },
  {
    id: 4,
    slug: "water-vendo-starter-kit",
    name: "Water Vendo Starter Kit",
    category: "Starter Kit",
    price: 3999,
    stock: 8,
    badge: "Starter Kit",
    image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=900&q=80",
    shortDescription:
      "Starter kit for building a basic water vendo controller system.",
    description:
      "A beginner-friendly kit for creating a water vending controller setup. Includes the main control board and basic recommended modules for a water vendo build.",
    features: [
      "Good for first vendo project",
      "Includes main board concept setup",
      "Ready for water vendo application",
      "Can be upgraded with expansion boards",
      "Great for business and learning"
    ],
    specs: {
      Input: "12V DC",
      Outputs: "Pump / Valve Control Ready",
      UseCase: "Water vendo machine",
      Expandable: "Yes"
    }
  }
];

export const categories = ["All", "Controller Board", "Expansion Board", "Starter Kit"];
