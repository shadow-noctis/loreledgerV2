# init.sql

```sql
-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =========================
-- USERS
-- =========================
CREATE TABLE users (
    user_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);

-- =========================
-- TITLES / PROJECTS
-- =========================
CREATE TABLE titles (
    title_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT now(),

    -- Each user can only have one title with the same name
    UNIQUE(user_id, name)
);

-- =========================
-- CHARACTERS
-- =========================
CREATE TABLE characters (
    character_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title_id UUID NOT NULL REFERENCES titles(title_id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    tag VARCHAR(50),
    created_at TIMESTAMP DEFAULT now(),

    -- Prevent duplicate character names inside the same title
    UNIQUE(title_id, name)
);

-- =========================
-- CHARACTER EXTRAS
-- Flexible field/value storage
-- =========================
CREATE TABLE character_extras (
    extra_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    character_id UUID NOT NULL REFERENCES characters(character_id) ON DELETE CASCADE,
    field_name VARCHAR(100) NOT NULL,
    field_value TEXT NOT NULL
);

-- =========================
-- DICTIONARY
-- One dictionary per title
-- =========================
CREATE TABLE dictionaries (
    dictionary_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title_id UUID NOT NULL UNIQUE REFERENCES titles(title_id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT now()
);

-- =========================
-- WORDS
-- =========================
CREATE TABLE words (
    word_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    dictionary_id UUID NOT NULL REFERENCES dictionaries(dictionary_id) ON DELETE CASCADE,
    word VARCHAR(250) NOT NULL,
    definition TEXT NOT NULL,
    tag VARCHAR(50),
    created_at TIMESTAMP DEFAULT now(),

    -- Prevent duplicate words inside the same dictionary
    UNIQUE(dictionary_id, word)
);
```
