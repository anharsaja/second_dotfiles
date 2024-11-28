while true; do
  random_color=$(printf "#%06X" $((RANDOM*RANDOM%0xFFFFFF)))
  hyprctl keyword border_color $random_color
  sleep 0.5
done
