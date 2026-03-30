export type ThemeMode = 'light' | 'dark';

export interface Team {
  id: string;
  name: string;
  primaryColor: string; // Dynamic primary color hex
  mode: ThemeMode;     // Overall UI mode (light/dark)
  backgroundColor: string; // Specific background for this team mode
  textColor: string;      // Primary text color base
  tailwindClass: string;  // Color preview in palette
}

export const TEAMS: Team[] = [
  {
    id: 'yellow-team',
    name: 'Yellow Team',
    primaryColor: '#facc15', // Yellow 400/500
    mode: 'light',
    backgroundColor: '#ffffff',
    textColor: '#0f172a',
    tailwindClass: 'bg-yellow-400'
  },
  {
    id: 'dark-team',
    name: 'Dark Team',
    primaryColor: '#818cf8', // Indigo 400
    mode: 'dark',
    backgroundColor: '#020617', // Very dark blue/black
    textColor: '#f8fafc',
    tailwindClass: 'bg-slate-900'
  },
  {
    id: 'blue-team',
    name: 'Blue Team',
    primaryColor: '#3b82f6', // Blue 500
    mode: 'light',
    backgroundColor: '#f0f9ff',
    textColor: '#1e3a8a',
    tailwindClass: 'bg-blue-500'
  },
  {
    id: 'green-team',
    name: 'Green Team',
    primaryColor: '#22c55e', // Green 500
    mode: 'light',
    backgroundColor: '#f0fdf4',
    textColor: '#064e3b',
    tailwindClass: 'bg-green-500'
  },
  {
    id: 'purple-team',
    name: 'Purple Team',
    primaryColor: '#a855f7', // Purple 500
    mode: 'dark',
    backgroundColor: '#2e1065', // Dark Purple
    textColor: '#f5f3ff',
    tailwindClass: 'bg-purple-600'
  }
];
