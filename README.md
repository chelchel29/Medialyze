# Medialyze — Think. Verify. Decide.

**An Interactive Media and Information Literacy (MIL) Game**

Medialyze is a story-based educational game designed to help young people develop critical thinking and responsible digital decision-making skills. Players encounter realistic online situations, make choices, experience consequences, and learn how to respond to digital threats.

Instead of simply reading safety guidelines, players learn through interactive scenarios that encourage them to question information, verify sources, and think before sharing.

## Project Objectives

- Help young people recognize digital threats and misleading information.
- Encourage critical thinking before trusting online content.
- Promote responsible information sharing.
- Develop safer digital decision-making skills.
- Make Media and Information Literacy (MIL) education more engaging through gamification.

## Key Features

- **Interactive Storytelling:** Explore realistic digital situations through story-based challenges.
- **Decision-Based Gameplay:** Choose how to respond to different online situations.
- **Consequences and Feedback:** Discover how your decisions can affect the outcome.
- **Learning Through Experience:** Understand important MIL concepts through practical examples.
- **MIL Skill Tracking:** Represent learning progress across verification, critical thinking, digital safety, AI awareness, and responsible sharing.
- **Scenario-Based Architecture:** Organize challenges into structured stories, decisions, consequences, and lessons.

## How to Play

1. **Experience** a realistic online situation.
2. **Decide** what action you would take.
3. **Discover** the consequences of your choice.
4. **Learn** why a decision is safe or risky.
5. **Progress** by completing the challenge.

### Current Challenge: Viral Truth

_Can you separate fact from fiction?_

Players encounter a viral social media post and must decide whether to share it immediately or check the original source first. The scenario demonstrates why verifying information before sharing is essential to responsible digital citizenship.

## Technologies Used

| Technology   | Purpose                               |
| ------------ | ------------------------------------- |
| React        | Building the user interface           |
| TypeScript   | Type-safe application development     |
| Vite         | Development server and build tooling  |
| Tailwind CSS | Styling and responsive UI development |
| React Router | Navigation between application pages  |
| Lucide React | Icons and visual elements             |
| Motion       | UI animations and interactive effects |

## Project Structure

```text
Medialyze/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── data/
│   │   └── scenarios/
│   │       ├── index.ts
│   │       └── viralTruth.ts
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   ├── LevelSelectPage.tsx
│   │   ├── GamePage.tsx
│   │   └── MILProfilePage.tsx
│   ├── types/
│   │   └── game.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## Getting Started

Follow these steps to run Medialyze on your local machine.

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/) (a current compatible version)
- npm (included with Node.js)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

### Installation

**1. Clone the repository**

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

**2. Navigate to the project directory**

```bash
cd Medialyze
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the local URL**

Open the URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### Available Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Type-check and build the project     |
| `npm run lint`    | Run ESLint                           |
| `npm run preview` | Preview the production build locally |

## Future Development

Our vision for Medialyze includes:

- More interactive scenarios covering phishing, financial fraud, fake accounts, misinformation, and online exploitation.
- Additional challenges with increasing difficulty.
- Expanded feedback and learning experiences.
- Localized and multilingual content.
- Educator-created scenarios and educational partnerships.
- Further improvements to progress tracking and game achievements.
- Potential mobile-friendly expansion and educational deployment.

These are planned areas for future development, not claims that every feature is already implemented.

## Expected Impact

Medialyze aims to help young people become more thoughtful and responsible digital citizens by encouraging them to:

- Think critically before trusting online content.
- Verify information before sharing it.
- Recognize suspicious digital situations.
- Consider the consequences of online decisions.
- Practice safer and more responsible digital behavior.

## Team

Developed by a four-member student team from the **Myanmar Institute of Information Technology (MIIT), Mandalay, Myanmar**, for a Media and Information Literacy hackathon.

## Our Vision

We believe digital literacy should be more than knowing the rules. It should be the ability to make informed decisions when those rules matter.

**Medialyze — Think. Verify. Decide.**

_Learn through experience before it happens in real life._

---

_Built to support engaging, interactive Media and Information Literacy education._
