# LoreLedger

**LoreLedger** is a web-based application for tracking and managing characters in your stories and organizing fantasy world elements. It started as a simple CLI tool and now offers a modern React interface with user accounts and profile management.

## Status

⚠️ **Early Development – Not Yet Functional**  
This project is in the initial stages of development. Features like login, profiles, and character management are planned but not yet implemented. Use this repository for tracking progress and ideas.

## Core Features

- **Character Management**
  - Add new characters (name, age, gender, family, etc.)
  - Add custom fields for each character
  - Edit, delete, and list characters
  - View character data
  - Search for characters by name
  - Export/import character data
- **User Accounts**
  - Secure login and registration
  - User profiles with personalized data
  - Collaboration features for multiple users
- **Organization Tools**
  - Tag and group characters
  - Track relationships between characters
- **Fantasy Dictionary**
  - Manage and reference fantasy-specific terms and lore


## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (includes Docker Compose)

No other dependencies are required — everything runs inside containers.

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/shadow-noctis/LoreLedger.git
```
2. Navigate to the project directory:
```bash
   cd loreledgerV2
```
3. Start the services:
```bash
   docker compose up -d
```

Open your browser at http://localhost:5173 to view the app.

> **Note:** The Docker setup is currently configured for local development only, with hot reload enabled. It is not intended for production deployment.

## Technologies

- **Frontend:** React, JavaScript, Tailwind CSS
- **Backend:** Python
- **Data Storage:** PostgreSQL 16
- **Dev Tools / Deployment:** Docker for containerized development

*Transform your story creation with a web-based character tracker and fantasy dictionary.*