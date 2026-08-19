# Run with PowerShell
Write-Host "=== Scanning Connected Windows HDDs/SSDs ===" -ForegroundColor Cyan

# Get all external partitions that are ready
$drives = Get-Volume | Where-Object { $_.DriveType -eq 'Removable' -or ($_.DriveType -eq 'Fixed' -and $_.DriveLetter -ne 'C') }

if (-not $drives) {
    Write-Host "No external drives found. Using local media folder." -ForegroundColor Yellow
    Exit
}

foreach ($drive in $drives) {
    $driveLetter = "$($drive.DriveLetter):\"
    $volumeLabel = if ($drive.FileSystemLabel) { $drive.FileSystemLabel } else { "Drive_$($drive.DriveLetter)" }
    Write-Host "[DETECTED] $volumeLabel at $driveLetter ($($drive.FileSystemType))" -ForegroundColor Green
}

Write-Host "`nTo use these in Docker Desktop on Windows, map them in docker-compose.yml as:" -ForegroundColor Cyan
foreach ($drive in $drives) {
    Write-Host "  - $($drive.DriveLetter):/:/data/$($drive.DriveLetter)" -ForegroundColor Gray
}
