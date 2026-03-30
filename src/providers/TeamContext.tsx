import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { TEAMS } from '../types/team';
import type { Team } from '../types/team';

interface TeamContextType {
  currentTeam: Team;
  changeTeam: (id: string) => void;
  setCustomColor: (hex: string) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [currentTeam, setCurrentTeam] = useState<Team>(TEAMS[0]);
  const { i18n } = useTranslation();

  // Handle RTL for Arabic
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const root = document.documentElement;
    const { primaryColor, backgroundColor, textColor, mode } = currentTeam;

    // Apply primary brand colors
    root.style.setProperty('--color-primary-500', primaryColor);
    root.style.setProperty('--color-primary-600', adjustBrightness(primaryColor, -15));
    root.style.setProperty('--color-primary-100', primaryColor + '22');

    // Apply layout theme variables
    root.style.setProperty('--bg-main', backgroundColor);
    root.style.setProperty('--text-main', textColor);
    
    // Mode specific variables
    if (mode === 'dark') {
      root.style.setProperty('--text-secondary', adjustBrightness(textColor, -20));
      root.style.setProperty('--text-muted', adjustBrightness(textColor, -40));
      root.style.setProperty('--card-bg', adjustBrightness(backgroundColor, 8));
      root.style.setProperty('--card-border', adjustBrightness(backgroundColor, 15));
      root.classList.add('dark');
    } else {
      root.style.setProperty('--text-secondary', '#475569');
      root.style.setProperty('--text-muted', '#94a3b8');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--card-border', '#f1f5f9');
      root.classList.remove('dark');
    }
  }, [currentTeam]);

  // Helper to adjust color brightness
  function adjustBrightness(hex: string, percent: number) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    r = Math.min(255, Math.ceil(r * (1 + percent / 100)));
    g = Math.min(255, Math.ceil(g * (1 + percent / 100)));
    b = Math.min(255, Math.ceil(b * (1 + percent / 100)));

    const newHex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return newHex;
  }

  // Calculate if a color is light or dark for optimal accessibility
  function getContrastYIQ(hexcolor: string) {
    const r = parseInt(hexcolor.slice(1, 3), 16);
    const g = parseInt(hexcolor.slice(3, 5), 16);
    const b = parseInt(hexcolor.slice(5, 7), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'light' : 'dark';
  }

  const changeTeam = (id: string) => {
    const team = TEAMS.find(t => t.id === id);
    if (team) setCurrentTeam(team);
  };

  const setCustomColor = (hex: string) => {
    const mode = getContrastYIQ(hex);
    // If user picks a light color, background should be white/very light.
    // If user picks a dark color, background should be black/very dark.
    const backgroundColor = mode === 'light' ? '#ffffff' : '#020617';
    const textColor = mode === 'light' ? '#0f172a' : '#f8fafc';
    
    setCurrentTeam({
      id: 'custom',
      name: 'Custom Team',
      primaryColor: hex,
      mode: mode as 'light' | 'dark',
      backgroundColor,
      textColor,
      tailwindClass: ''
    });
  };

  return (
    <TeamContext.Provider value={{ currentTeam, changeTeam, setCustomColor }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) throw new Error('useTeam must be used within TeamProvider');
  return context;
};
