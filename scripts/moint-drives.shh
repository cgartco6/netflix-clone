#!/usr/bin/env bash
set -euo pipefail

MOUNT_BASE="/mnt/external_media"
mkdir -p "$MOUNT_BASE"

echo "=== Auto-Detecting External HDDs/SSDs ==="

# Retrieve all block devices that are partitions with filesystem UUIDs
lsblk -rn -o NAME,TYPE,FSTYPE,UUID | while read -r NAME TYPE FSTYPE UUID; do
    # Skip non-partitions or drives without a valid filesystem UUID
    if [ "$TYPE" != "part" ] || [ -z "$UUID" ]; then
        continue
    fi

    TARGET_DIR="$MOUNT_BASE/drive_$UUID"
    mkdir -p "$TARGET_DIR"

    if mountpoint -q "$TARGET_DIR"; then
        echo "[INFO] /dev/$NAME is already mounted at $TARGET_DIR"
    else
        echo "[ACTION] Mounting /dev/$NAME ($FSTYPE) to $TARGET_DIR..."
        
        # Mount based on filesystem type
        if [ "$FSTYPE" = "ntfs" ] || [ "$FSTYPE" = "exfat" ]; then
            mount -t "$FSTYPE" -o defaults,uid=1000,gid=1000,nofail "/dev/$NAME" "$TARGET_DIR" || true
        else
            mount -t "$FSTYPE" -o defaults,nofail "/dev/$NAME" "$TARGET_DIR" || true
        fi
    fi
done

echo "=== Mount Process Complete ==="
echo "Mounted locations under $MOUNT_BASE:"
ls -la "$MOUNT_BASE"
