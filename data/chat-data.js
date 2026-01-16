export const collections = [
  {
    id: "product-strategy",
    title: "Product Strategy",
    description: "Q1 planning and launch notes",
    itemCount: 12,
    active: true
  },
  {
    id: "market-research",
    title: "Market Research",
    description: "Competitor summaries and insights",
    itemCount: 7
  },
  {
    id: "design-system",
    title: "Design System",
    description: "Component specs and reviews",
    itemCount: 18
  },
  {
    id: "support-briefs",
    title: "Support Briefs",
    description: "Top tickets and responses",
    itemCount: 5
  }
];

export const quickPrompts = [
  "Summarize this deck in 3 bullets",
  "Draft a client update for this week",
  "Compare GTM plans for Q1 and Q2"
];

export const conversation = [
  {
    id: "q1",
    role: "user",
    content:
      "Analyze the attached product brief and outline the top 3 launch risks."
  },
  {
    id: "a1",
    role: "assistant",
    content:
      "Here are the three largest risks: timeline compression, dependency on data migrations, and the new pricing model. I can provide mitigation steps for each."
  },
  {
    id: "q2",
    role: "user",
    content: "Add mitigation steps and highlight owners for each risk."
  }
];
