export interface AnimatedSwitchProps {
    size?: number; // Size of the switch (default: 100)
    value: boolean; // Current value (true or false)
    knobColor?: string; // Color of the knob
    borderColor?: string; // Border color of the switch
    lightModeBg?: string; // Background color for light mode
    darkModeBg?: string; // Background color for dark mode
    borderWidth?: number; // Border width
    animationSpeed?: "slow" | "normal" | "fast"; // Animation speed
    elevation?: number; // Elevation for shadow
    onToggle: (value: boolean) => void; // Callback when toggled
}