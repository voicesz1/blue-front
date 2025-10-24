#!/usr/bin/env pwsh
# Script para iniciar o servidor de desenvolvimento Blue Home

Write-Host "🚀 Iniciando Blue Home..." -ForegroundColor Cyan
Write-Host ""

# Verificar se está na pasta correta
$projectPath = "C:\Users\Voices\Documents\workspace\blue-home"
if (Test-Path $projectPath) {
    Set-Location $projectPath
    Write-Host "✓ Pasta do projeto encontrada" -ForegroundColor Green
} else {
    Write-Host "✗ Pasta do projeto não encontrada!" -ForegroundColor Red
    exit 1
}

# Verificar se node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "⚠ Dependências não encontradas. Instalando..." -ForegroundColor Yellow
    npm install
}

Write-Host ""
Write-Host "🌐 Iniciando servidor de desenvolvimento..." -ForegroundColor Cyan
Write-Host "   Acesse: http://localhost:3000" -ForegroundColor Blue
Write-Host "   ou http://localhost:3001 se a porta 3000 estiver em uso" -ForegroundColor Blue
Write-Host ""
Write-Host "   Pressione Ctrl+C para parar o servidor" -ForegroundColor Yellow
Write-Host ""

# Iniciar servidor
npm run dev
