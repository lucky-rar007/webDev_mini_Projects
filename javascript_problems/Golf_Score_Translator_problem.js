const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) return names[0]; 
    
    const diff = strokes - par;
    
    if (diff <= -2) return names[1];  
    if (diff === -1) return names[2]; 
    if (diff === 0) return names[3]; 
    if (diff === 1) return names[4]; 
    if (diff === 2) return names[5]; 
    if (diff >= 3) return names[6];  
}