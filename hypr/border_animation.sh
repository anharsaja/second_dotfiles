#!/bin/bash

# Array warna solid dari palet Catppuccin
COLORS=(
    "rgba(f5e0dc)" # Rosewater
    "rgba(f38ba8)" # Red
    "rgba(a6e3a1)" # Green
    "rgba(89b4fa)" # Blue
    "rgba(cba6f7)" # Mauve
)

while true; do
    for COLOR in "${COLORS[@]}"; do
        hyprctl keyword col.active_border "$COLOR"
        sleep 1
    done
done
