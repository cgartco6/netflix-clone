#!/usr/bin/env bash
set -e

MOUNT_BASE="/mnt/external_media"
mkdir -p "$MOUNT_BASE"

echo "Scanning for external drives..."
DRIVES=$(lsblk -rn -o NAME,TYPE,FSTYPE,UUID | grep "part" | grep -v "swap")

echo "$DRIVES" | while read -r line; do
    DEV_NAME=$(echo "$line" | awk '{print $1}')
    FS_TYPE=$(echo "$line" | awk '{print $3}')
    UUID=$(echo "$line" | awk '{print $4}')

    if [ -n "$UUID" ]; then
        TARGET_DIR="$MOUNT_BASE/drive_$UUID"
        mkdir -p "$TARGET_DIR"
        
        if ! mountpoint -q "$TARGET_DIR"; then
            echo "Mounting /dev/$DEV_NAME to $TARGET_DIR..."
            mount -t "$FS_TYPE" -o defaults,nofail "/dev/$DEV_NAME" "$TARGET_DIR" || true
        fi
    fi
done
echo "All external drives mounted at $MOUNT_BASE"
