FROM python:3.11-slim

COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

WORKDIR /backend

COPY pyproject.toml .
COPY uv.lock .

ENV UV_PROJECT_ENVIRONMENT=/backend/.venv

RUN uv sync --frozen --no-dev

COPY . .
EXPOSE 8000

CMD ["uv", "run", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]