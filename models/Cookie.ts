export class Cookie {
  //TO(DONE)DO - Cookies have three attributes; name, colour, chocolateChipNum
  // colour is a string
  // There is one constructor which takes a name as a parameter.  Initialise colour to brown and chocolateChipNum to 0
  name: string;
  colour: string;
  chocolateChipNum: number;

  constructor(_name: string) {
    this.name = _name;
    this.colour = 'Brown';
    this.chocolateChipNum = 0;
  }
}
