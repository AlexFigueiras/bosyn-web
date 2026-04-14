# --- CONFIGURAÇÃO DE CAMINHOS ---
$libOfficial = "$HOME\biblioteca-skills\skills"
$libPropria = "$HOME\antigravity-lib-own"
$projetoSkills = "$PSScriptRoot\.agent\skills"
$jsonPath = "$PSScriptRoot\bundles.json"

# --- VALIDAÇÕES ---
if (-not (Test-Path $jsonPath)) { 
    Write-Host "[!] ERRO: Arquivo bundles.json nao encontrado!" -ForegroundColor Red
    exit 
}
$bundles = Get-Content $jsonPath | ConvertFrom-Json

if ($args.Count -eq 0) { 
    Write-Host "[!] Informe os bundles. Ex: .\instalar_skills.ps1 Essentials Fullstack" -ForegroundColor Yellow
    exit 
}

# --- 1. LIMPEZA NUCLEAR ---
Write-Host "[1/3] Limpando pasta .agent\skills..." -ForegroundColor Cyan
if (Test-Path $projetoSkills) { 
    Remove-Item -Path $projetoSkills -Recurse -Force -ErrorAction SilentlyContinue 
}
New-Item -ItemType Directory -Path $projetoSkills -Force | Out-Null

# --- 2. INSTALAÇÃO DINÂMICA ---
Write-Host "[2/3] Instalando bundles oficiais..." -ForegroundColor Cyan
foreach ($target in $args) {
    if ($bundles.$target) {
        Write-Host " [+] Processando Bundle: $target" -ForegroundColor Green
        foreach ($skill in $bundles.$target) {
            $source = Join-Path $libOfficial $skill
            if (Test-Path $source) {
                Copy-Item -Path $source -Destination (Join-Path $projetoSkills $skill) -Recurse -Force
                Write-Host "      > $skill ok." -ForegroundColor Gray
            } else {
                Write-Host "      [X] ERRO: Skill '$skill' nao encontrada em $libOfficial" -ForegroundColor Red
            }
        }
    } else {
        Write-Host " [!] Bundle '$target' nao definido no JSON." -ForegroundColor Red
    }
}

# --- 3. INJEÇÃO PROPRIETÁRIA ---
Write-Host "[3/3] Injetando skills proprietarias (MedFlex)..." -ForegroundColor Cyan
if (Test-Path $libPropria) {
    # Copia o conteúdo da pasta própria para a raiz das skills do projeto
    Copy-Item -Path "$libPropria\*" -Destination $projetoSkills -Recurse -Force
    Write-Host " [+] Conteudo de $libPropria injetado com sucesso." -ForegroundColor Green
}

Write-Host "`n=====================================================" -ForegroundColor Magenta
Write-Host " SUCESSO: Ambiente configurado via PowerShell Dinamico."
Write-Host "=====================================================" -ForegroundColor Magenta