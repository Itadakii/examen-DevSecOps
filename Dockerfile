FROM python:3.11-slim-bookworm

# 1. Créer l'utilisateur avec son dossier personnel
RUN useradd --create-home --shell /bin/bash appuser

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 2. Copier le code en donnant les droits à appuser
COPY --chown=appuser:appuser . .

# 3. Basculer sur appuser
USER appuser

EXPOSE 5000

CMD ["python", "app.py"]
