function Vigilante (identity, city, team, skills, heroName) {
    this.identity= identity;
    this.city= city;
    this.team= team;
    this.skills= skills;
    this.heroName = heroName;
  }
  
  
function DeathstrokeAttacks(city) {
  const saviors = [
    new Vigilante('Bruce Wayne', 'Gotham', 'Justice League', 'detective', 'Batman'),
    new Vigilante('Dick Grayson', 'Blüdhaven', 'Teen Titans', 'acrobat', 'Nightwing'),
    new Vigilante('Oliver Queen', 'Star City', 'Justice League', 'archer', 'GreenArrow')
  ];

  let obj = saviors.find(saviors => saviors.city === city).heroName;

  return obj + ' will save the day!';
}

DeathstrokeAttacks('Gotham');
