import { useTeam } from '../../providers/TeamContext';

export const ColorPalette = () => {
  const { currentTeam, changeTeam, setCustomColor } = useTeam();

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-3">
        {/* {TEAMS.map((team) => (
          <button
            key={team.id}
            onClick={() => changeTeam(team.id)}
            title={team.name}
            className={`
              w-6 h-6 rounded-full transition-all duration-300 transform hover:scale-125
              ${team.tailwindClass} 
              ${currentTeam.id === team.id ? 'ring-2 ring-offset-2 ring-secondary-400 scale-110' : 'opacity-70 hover:opacity-100'}
            `}
          />
        ))} */}
        
        {/* Color Picker Input - Always a Circle */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-secondary-100/20 overflow-hidden transition-transform duration-300 hover:scale-110 active:scale-95 shadow-sm">
          <input 
            type="color" 
            value={currentTeam.id === 'custom' ? currentTeam.primaryColor : '#facc15'}
            onChange={(e) => setCustomColor(e.target.value)}
            className="absolute inset-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 cursor-pointer border-none p-0 outline-none"
          />
        </div>
      </div>
    </div>
  );
};
